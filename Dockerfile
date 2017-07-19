FROM node:alpine

# APP DIR
RUN mkdir -p /bff
COPY . /bff

# Mysql Storage
RUN mkdir -p mysql-storage

WORKDIR /bff

RUN npm install
RUN npm install nodemon -g

CMD ["nodemon", "app.js"]