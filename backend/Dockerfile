FROM node:18-alpine as base
WORKDIR /src
COPY package*.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production

RUN npm install

RUN npm install node-gyp -g && \
    npm install bcrypt -g && \
    npm install bcrypt --save

# apk del make gcc g++ python

COPY --chown=node:node . ./

USER node
CMD ["npm", "start"]
