FROM node:10.16.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

RUN npx webpack 

CMD ["npm", "start"]