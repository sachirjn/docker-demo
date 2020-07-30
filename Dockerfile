FROM node:12.8.0-alpine

WORKDIR /srv/node

COPY ./src /srv/node/src
COPY ./package.json /srv/node/package.json
COPY ./package-lock.json /srv/node/package-lock.json

RUN npm i

EXPOSE 9110

CMD npm start
