# Dockerfile
FROM hypriot/rpi-node:latest
WORKDIR /data
RUN git clone https://github.com/estebanrfp/iotos.git ./
RUN npm i --production
RUN npm install forever -g
CMD ["forever", "/index.js"]
