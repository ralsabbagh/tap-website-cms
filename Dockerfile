
FROM node:8

LABEL maintainer="Reham Alsabbagh (r.alsabbagh@tap.company)"

ADD package.json /tmp/package.json
COPY .npmrc /tmp
RUN cd /tmp && npm install --verbose
RUN mkdir -p /app && rm -f .npmrc && cp -a /tmp/node_modules /app/

WORKDIR /app

RUN npm install -g pm2@latest

# Add your source files
COPY . /app
RUN npm run build
# RUN ls

CMD [ "npm", "start" ]

EXPOSE 3000
