#!/bin/bash

sudo apt-get -y install build-essential curl
sudo apt-get -y install libopencv-dev
sudo apt-get -y install libimlib2 libimlib2-dev

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs


curl -O https://www.unix-ag.uni-kl.de/~auerswal/ssocr/ssocr-2.16.3.tar.bz2
wait $!
bzip2 -dc ssocr-2.16.3.tar.bz2 | tar -xvf -
wait $!
cd ssocr-2.16.3
sudo make install
wait $!

cd ..
rm ssocr-2.16.3.tar.bz2
wait $!
rm -rf ssocr-2.16.3
wait$!

sudo npm install
wait $!
node server/install-test.js
