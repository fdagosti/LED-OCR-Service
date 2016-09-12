#!/bin/bash

sudo apt-get update

sudo apt-get -y install build-essential

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get -y install libopencv-dev

sudo apt-get -y install libimlib2 libimlib2-dev

curl -O https://www.unix-ag.uni-kl.de/~auerswal/ssocr/ssocr-2.16.3.tar.bz2
wait $!
bzip2 -dc ssocr-2.16.3.tar.bz2 | tar -xvf -
wait $!
cd ssocr-2.16.3
sudo make install
wait $!

rm ssocr-2.16.3.tar.bz2
wait $!
rm -rf ssocr-2.16.3
wait$!
