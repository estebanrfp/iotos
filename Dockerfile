FROM hypriot/rpi-node:latest
MAINTAINER Esteban Fuster Pozzi <estebanrfp@gmail.com>

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
RUN mkdir /temp
RUN mkdir /app
RUN git clone https://github.com/estebanrfp/iotos.git /app/
ADD package.json /tmp/package.json
RUN cd /tmp && npm i --production
RUN npm i -g pm2
RUN cp -a /tmp/node_modules /app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /app
ADD . /app

CMD ["pm2-dev", "process.yml"]
