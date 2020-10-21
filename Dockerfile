FROM alpine

LABEL maintainer="https://github.com/adantop"
# remove all finished containers
# docker container rm $(docker container ls -aq)

ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN apk add --no-cache python3 py3-pip

RUN mkdir /frontend

COPY requirements.txt /frontend/requirements.txt
COPY www /frontend/www
COPY server.py /frontend/server.py

RUN pip install -r /frontend/requirements.txt

WORKDIR /frontend

EXPOSE 5000

ENTRYPOINT [ "python3", "server.py" ]
