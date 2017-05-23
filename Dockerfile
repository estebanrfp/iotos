# Dockerfile
FROM hypriot/rpi-node:latest
WORKDIR /data
RUN git clone https://github.com/estebanrfp/iotos.git ./
RUN npm i --production && npm i nodemon -g
RUN nodemon --watch . auto.js