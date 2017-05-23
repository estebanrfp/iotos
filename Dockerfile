# Dockerfile
FROM hypriot/rpi-node:latest
WORKDIR /data
RUN git clone https://github.com/estebanrfp/iotos.git ./
RUN npm i --production
RUN npm install forever -g
RUN npm i -S nodemon
CMD ["forever", "/index.js"]
