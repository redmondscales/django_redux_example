FROM joyzoursky/python-chromedriver:3.6-xvfb

ENV PYTHONUNBUFFERED 1

ENV DJANGO_SETTINGS_MODULE=django_config.settings

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y nodejs nano 

WORKDIR /code

EXPOSE 8000

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm cache verify && npm install

ADD requirements.txt requirements.txt

RUN pip install -r requirements.txt 

COPY . .

RUN npm run build

