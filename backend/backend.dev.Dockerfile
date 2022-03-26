FROM node:16

RUN mkdir -p /srv/backend
WORKDIR /srv/backend

COPY . .
RUN rm package-lock.json && rm -rf node_modules

RUN npm install --platform=linux --arch=x64
RUN npm run build

CMD "npm" "run" "develop"