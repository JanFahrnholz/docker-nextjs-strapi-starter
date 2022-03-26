FROM node:12

RUN mkdir -p /var/www/
WORKDIR /var/www/

COPY ./backend /var/www/

RUN npm install
RUN npm run build

CMD "npm" "run" "develop"