FROM node:16

RUN mkdir -p /var/www/
WORKDIR /var/www/

COPY ./frontend /var/www/

RUN npm install --platform=linux --arch=x64
RUN npm run build

CMD "npm" "run" "dev"