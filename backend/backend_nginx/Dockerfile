FROM nginx:1.25
RUN apt-get update

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/