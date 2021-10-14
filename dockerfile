FROM node:14
 
WORKDIR /usr/fwk

COPY package.json .

RUN npm install\
    && npm install typescript -g

COPY . .

RUN tsc

EXPOSE 8080

CMD ["node", "./dist/src/index.js"]