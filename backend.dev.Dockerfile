FROM strapi/base

WORKDIR /app

COPY ./backend/package*.json .
RUN npm ci

COPY ./backend .

RUN npm run build

CMD "npm" "run" "develop"