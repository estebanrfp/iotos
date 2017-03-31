FROM resin/raspberrypi-node:onbuild
# Enable systemd
ENV INITSYSTEM on
# replace this with your application's default port
EXPOSE 8888
You can then build and run the Docker image:

docker build -t my-nodejs-app .
docker run -it --rm --name my-running-app my-nodejs-app

# server.js will run when container starts up on the device
CMD ["npm", "start"]
