# Dockerfile
FROM hypriot/rpi-node:latest

WORKDIR /data

RUN git clone https://github.com/estebanrfp/iotos.git ./

# RUN npm i --production
