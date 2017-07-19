FROM node:boron

# APP DIR
RUN mkdir -p /bff
COPY . /bff

WORKDIR /bff

RUN npm install
RUN npm install nodemon -g

CMD ["nodemon", "app.js"]