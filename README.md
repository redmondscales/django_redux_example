# Django with Redux/React Components

Example project which uses webpack to integrate redux and react components with Django without using a single page app. 

This approach helps to create complex pages with shared state whilst also leveraging Django's templating engine.

##3rd party libraries used:


For easily rendering webpack compiled bundles
https://github.com/Frojd/django-react-templatetags

Python with selenium docker image for end to end testing of react components
https://github.com/joyzoursky/docker-python-chromedriver


## Setup


`docker-compose up --build`

`docker-compose exec web python manage.py migrate`

http://localhost:8000/counter

##React Structure

Local django apps are stored in the django_apps folder. This allows webpack to only scan for files ending in .component.jsx in this folder. Any files matching are treated as entry points and compiled into .js files in /static/js/components.

"django_apps/appname/somefile.component.jsx"

will be compiled and stored in *webpack-stats.json* as 
        
`{ appname.somefile: './django_apps/appname/somefile.component.jsx' }`

so you can include your jsx file at './django_apps/appname/somefile.component.jsx' 
in django using the render_bundle tag as follows:

{% render_bundle 'appname.somefile' %}

###Rendering React Components

In order to use the tags provided by django-react-templatetags project we use addComponentToWindow function as follows

``` 
import addComponentToWindow from "~/react_globals/addComponentToWindow"
import { Component } from 'react'

class HeaderComponent extends Component {

    render() {
        return <h1>Text From Django: {this.props.text} </h1>

    }
}

addComponentToWindow(HeaderComponent, 'HeaderComponent');

// result is window.Components['HeaderComponent'] = HeaderComponent
```

This will add the HeaderComponent to the window.Components object. We can now use the following two template tags to render the component on our html page

{% react_render component="window.Components.HeaderComponent" props=react_props.display %}

Where react_props are provided in the Django context object

###Redux 

If we need components to interact via Redux we can use the wrapComponentInRedux function as follows

```
import addComponentToWindow from "~/react_globals/addComponentToWindow";
import { wrapComponentInRedux } from "~/react_globals/wrapComponentInRedux";
import * as ReduxCounterState from "./counter.state";
import { Component } from 'react'

class ReduxCounterReader extends Component {

    constructor(props) {
        
        super(props)
        
        /*
            this.props =  {
                text_from_django: 'react_reader_text', <== this is from django context
                count: 1 <=== this is from redux, see redux_counter.state.jsx
            }

        */
    }

    render() {
        
        return <div>
            <h1>Displaying Redux Store counter.count: <span id="redux_counter_display">{this.props.count}</span></h1>
            <h1>Text From Django: {this.props.text_from_django} </h1>
        </div>
    }
}

addComponentToWindow(
    wrapComponentInRedux(
        ReduxCounterReader,
        'counter', /*  <=== the key that is used to map redux state e.g.
                state = {
                    counter: { count: 1 },
                    somethingElse: { someOtherProp: 1 }
                }
            
            this will assign state.counter to the component's props so it can access
            this.props.count == 1 
        
        */
        ReduxCounterState.reducer,
        ReduxCounterState.actionCreators

    ),
    'display' // <=== this is the key that is used to assign this component to window.Component['ReduxCountReader'] = ReduxCountReader
)
```

When the component is passed into the wrapComponentInRedux function, we specify:
1. A string key that is used to take a subset of our Redux state and pass it to the component as props, 

2. Reducers which will be added to the Redux store

3. Action creators which will connect our component to the Redux store and make them available in the components props. 

See django_apps/counter/js/counter.incrementer.component.jsx for an example.

Navigate to localhost:8000/counter for an example of interaction between two components

## Development

`docker-compose up`

When writing React components webpack can be run in watch mode, which will automatically compile any changes to .js files. However file systems changes don't cascade down into docker containers so either install node js locally and run

`npm run watch`

Or run 

`docker-compose exec web npm run build`

whenever you change a .component.jsx file

## Testing

This project includes an end-to-end selenium test example where we click on one react component, and verifiy the result on another component. 

See django_apps/counter/tests.py for an example.

`docker-compose run web npm run build`
`docker-compose run web python manage.py test`



