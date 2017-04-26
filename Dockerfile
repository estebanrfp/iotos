# Dockerfile
FROM hypriot/rpi-node:slim
# FROM hypriot/rpi-node:latest
MAINTAINER Esteban Fuster Pozzi <estebanrfp@gmail.com>

# Set environment variables

# ENV appDir /var/www/app/current
RUN apt-get update && apt-get install -y \
    git-core \
    wget \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Define working directory
WORKDIR /data

RUN git clone https://github.com/estebanrfp/iotos.git /data/
# Add our package.json and install *before* adding our application files
# ADD package.json ./

RUN npm i --production

RUN npm i -g pm2

# Add application files
# ADD . /data

# CMD ["pm2", "start", "processes.json", "--no-daemon"]
CMD ["pm2-dev", "process.yml"]
# CMD ["pm2-docker", "process.yml"]
# CMD ["pm2-dev", "process.yml", "--only", "APP"]

