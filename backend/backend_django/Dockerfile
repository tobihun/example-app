FROM python:3

RUN apt-get update && apt-get install dos2unix

RUN mkdir -p /app

COPY ./requirements.txt /app/

WORKDIR /app/

RUN pip install -r requirements.txt

COPY ./. /app/.

RUN dos2unix ./docker-entrypoint.sh
RUN chmod 777 ./docker-entrypoint.sh

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]