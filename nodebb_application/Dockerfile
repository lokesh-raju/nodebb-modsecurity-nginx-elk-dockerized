FROM node:lts

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
# Adding arguments which are usefull for further steps
#ARG COMMIT=v1.14.3
ARG BRANCH=v1.14.3
ARG REPO=NodeBB/NodeBB

RUN apt-get update && \
    apt-get -y install git && \
    git clone https://github.com/${REPO} --branch=${BRANCH}&& \
    cp /usr/src/app/NodeBB/install/package.json /usr/src/app/package.json

RUN cp -a /usr/src/app/NodeBB/. /usr/src/app/

COPY conf/config.json.template /usr/src/app/config.json.template

RUN npm install --only=prod && \
    npm cache clean --force

ENV NODE_ENV=production \
    daemon=false \
    silent=false

EXPOSE 4567

CMD node ./nodebb build ;  node ./nodebb start
