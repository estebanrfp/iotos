FROM resin/raspberrypi-node:onbuild
# Enable systemd
ENV INITSYSTEM on
# replace this with your application's default port
EXPOSE 8888

docker build -t my-nodejs-app .
docker run -it --rm --name my-running-app server

# server.js will run when container starts up on the device
CMD ["npm", "start"]
