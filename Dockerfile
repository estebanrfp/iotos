# Dockerfile
FROM hypriot/rpi-node:slim

WORKDIR /data
RUN git clone https://github.com/estebanrfp/iotos.git ./
RUN npm i --production
