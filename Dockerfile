# debian:jessie
FROM scratch

# Unpack Debian x86-64 architecture base
IFARCH x86-64
ADD rootfs-x64.tar.xz
ENDIFARCH

# Unpack the Raspberry Pi base if it's any of these four archs
IFARCH arm7 arm8 arm8.1 rpi
ADD rootfs-rpi.tar.xz
# This image is compatible with any of these architectures,
# and does not get built or stored separately for them all
TAGARCH arm7 arm8 arm8.1 rpi
ENDIFARCH

# Enable systemd
ENV INITSYSTEM on
# replace this with your application's default port
EXPOSE 8888

docker build -t my-nodejs-app .
docker run -it --rm --name my-running-app server

# server.js will run when container starts up on the device
CMD ["npm", "start"]
