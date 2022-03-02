FROM node:16

RUN mkdir -p /var/www/
WORKDIR /var/www/

COPY ./frontend /var/www/
RUN npm i
RUN npm run build

# Running the app
CMD ["npm", "run", "dev"]