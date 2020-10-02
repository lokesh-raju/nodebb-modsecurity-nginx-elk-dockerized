FROM node:lts

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
# Adding arguments which are usefull for further steps
ARG COMMIT=master
ARG BRANCH=master
ARG REPO=NodeBB/NodeBB

RUN apt-get update && \
    apt-get -y install git && \
    git init && \
    git remote add origin https://github.com/${REPO} && \
    git fetch --depth 1 origin ${BRANCH} && \
    git checkout ${COMMIT} && \
    cp /usr/src/app/install/package.json /usr/src/app/package.json

RUN npm install --only=prod && \
    npm cache clean --force

ENV NODE_ENV=production \
    daemon=false \
    silent=false

EXPOSE 4567

CMD node ./nodebb build ;  node ./nodebb start
