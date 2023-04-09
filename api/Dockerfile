FROM node:18-alpine

WORKDIR /srv/ecoleta

COPY dist/ dist/
COPY package.json package.json
COPY uploads uploads

ENV NODE_ENV=production

# Ajust date
RUN ln -s /usr/share/zoneinfo/Brazil/East /etc/localtime

RUN ["npm", "install", "--omit=dev"]

EXPOSE 3333

ENTRYPOINT ["node", "dist/server.js"]