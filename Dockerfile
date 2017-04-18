FROM hypriot/rpi-nodejs
MAINTAINER Esteban Fuster Pozzi <estebanrfp@gmail.com>

# Adding source files into container
ADD src/ /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Run Node.js
CMD ["node", "index.js"]
