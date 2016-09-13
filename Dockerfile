FROM ubuntu:14.04

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/fdagosti/LED-OCR-Service.git && cd LED-OCR-Service && chmod 755 install.sh && ./install.sh

CMD ["node", "server/watcher.js"]
EXPOSE 3000