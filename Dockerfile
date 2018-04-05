FROM node:latest
MAINTAINER Leonardo Duprates

COPY . /var/www/dataprovider-service
WORKDIR /var/www/dataprovider-service

RUN npm install --global nodemon
RUN npm install

ENTRYPOINT nodemon index.js

EXPOSE 3000
