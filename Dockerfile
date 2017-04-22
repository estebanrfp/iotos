# Dockerfile
FROM resin/rpi-raspbian:jessie
MAINTAINER Esteban Fuster Pozzi <estebanrfp@gmail.com>

# Set environment variables
#ENV appDir /var/www/app/current

# Run updates and install deps
RUN apt-get update && apt-get install -y \
    git-core \
    build-essential \
    wget \
    gcc \
    python \
    python-dev \
    python-pip \
    python-virtualenv \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN wget http://node-arm.herokuapp.com/node_latest_armhf.deb
RUN sudo dpkg -i node_latest_armhf.deb

# Add our package.json and install *before* adding our application files
ADD package.json ./
RUN npm i --production

# Install pm2 so we can run our application
RUN npm i -g pm2
CMD ["pm2", "start", "ecosystem.json", "--no-daemon"]