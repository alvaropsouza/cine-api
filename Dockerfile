FROM node:14.15.4-slim

USER root

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]
