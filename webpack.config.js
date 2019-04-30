let path = require("path");
let webpack = require('webpack');
const { join, basename } = require("path");
const { readdirSync, lstatSync } = require('fs')
const BundleTracker = require('webpack-bundle-tracker');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');


const baseDjangoAppsPath = './django_apps/';

const plugins = [
    new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise',
    }),
    new BundleTracker({ filename: './webpack-stats.json' }),
    new WebpackCleanupPlugin(),
];

const isDirectory = path => {
    return lstatSync(path).isDirectory()
};

const shouldBeCompiled = (additionalSearch) => path => path.indexOf(`${additionalSearch || ''}.jsx`) > -1


const addEntryPoints = (path, entryPoints, prefixes = [], suffix) => {
    /*
        Looks through all files in /react_components/ that end .jsx and then 
        all files in subfolders that end in .component.jsx

        compiles them as seperate entry points
        
        For example
        
        "react_components/somewhere/somefile.jsx"

        will be compiled as 
        
        {
            react_components.somewhere.somefile: './react_components/somewhere/somefile.jsx'
        }

        so you can include your jsx file at './react_components/somewhere/somefile.jsx' 
        in django using the render_bundle tag as follows:

         {% render_bundle 'react_components.somewhere.somefile' %}
    */
    const paths = readdirSync(path).map(name => join(path, name))
    const directories = paths.filter(isDirectory)
    const files = paths.filter((pathName) => !isDirectory(pathName)).filter(shouldBeCompiled(suffix))

    directories.forEach(dirPath => {

        addEntryPoints(dirPath, entryPoints, [...prefixes, basename(dirPath)], '.component')
    });


    files.forEach(filePath => {
        const strippedOfJsx = basename(filePath, '.jsx').replace('.component', '')
        if (entryPoints[strippedOfJsx]) {
            throw new Error(`entry point ${strippedOfJsx}, found in ${filePath}, already defined`)
        }

        entryPointName = [...prefixes, strippedOfJsx].join('.')
        entryPoints[entryPointName] = filePath
    });
    return entryPoints
};

const entryPoints = {
    react_globals: './react_globals/globals.js',
    create_redux_store: './react_globals/createReduxStore.js'
};


module.exports = {
    context: __dirname,
    entry: addEntryPoints(join(__dirname, baseDjangoAppsPath), entryPoints),
    output: {
        path: path.resolve('./static/js/components'),
        filename: "[name].js"
    },
    //these are loaded and exposed globally from react_globals.js
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                            [
                                "@babel/preset-env",
                                {
                                    "targets": { "browsers": ["last 1 version"] }
                                }
                            ]
                        ],
                        plugins: [
                            "babel-plugin-root-import"
                        ]
                    }
                }, // to transform JSX into JS
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx']
    },
};