FROM node:6.9

docker build -t server .
docker run -it --rm --name my-running-app server
