FROM hypriot/rpi-iojs:1.4.1

RUN [ "cross-build-start" ]

RUN apt-get update  
RUN apt-get install python  
RUN pip install virtualenv

RUN [ "cross-build-end" ]  
