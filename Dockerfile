FROM ubuntu:latest as base

WORKDIR /app
COPY . /app

RUN apt-get update
RUN apt-get install npm rustc cargo -y

FROM base as test

RUN npm run setup
CMD ["npm", "run", "test"]
