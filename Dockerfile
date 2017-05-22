# Dockerfile
FROM hypriot/rpi-node:alpine

WORKDIR /data
RUN git clone https://github.com/estebanrfp/iotos.git ./
RUN npm i --production
