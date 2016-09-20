FROM ubuntu:14.04

COPY [".","led-ocr"]

RUN apt-get update && led-ocr/install.sh

WORKDIR "/led-ocr"
CMD npm start