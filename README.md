sudo apt-get -y update && sudo apt-get upgrade && sudo apt-get install build-essential
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install build-essential

wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb

git clone https://github.com/estebanrfp/iotos.git

const config = {
    device: "",
    apiKey: "",
    authDomain: "",
    databaseURL: ""
};

module.exports = config

sudo npm i forever -g

nano /etc/systemd/system/myapp.service

which npm
/usr/local/bin/npm

[Service]
WorkingDirectory=/home/pirate/iotos/
ExecStart=/usr/local/bin/npm start
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=iotos
User=root
Group=root
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target


apt-get install sysvinit-core

sudo systemctl enable iotos.service
sudo systemctl disable iotos.service


sudo nano /etc/init.d/iotos
sudo chmod +x /etc/init.d/iotos
sudo update-rc.d iotos defaults