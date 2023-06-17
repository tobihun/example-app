FROM node:18 as react-build

RUN mkdir -p /app

COPY ./frontend_react/frontend /app

WORKDIR /app/

RUN npm install
RUN npm run build

FROM nginx:1.25
RUN apt-get update

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

COPY ./frontend_nginx/default.conf /etc/nginx/conf.d
COPY ./frontend_nginx/nginx.conf /etc/nginx

COPY --from=react-build /app/build/. /app/.
WORKDIR /app/
