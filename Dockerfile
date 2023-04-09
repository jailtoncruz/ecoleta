FROM nginx

ENV NODE_ENV=production

RUN apt-get update -y && apt-get upgrade -y
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
RUN apt-get install -y nodejs

# COPY default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./web/build /var/www
COPY ./api/dist /var/api
COPY ./api/package.json /var/api
COPY ./api/uploads /var/api
COPY startup.sh .

# Install dependencies
RUN cd /var/api && npm install --omit=dev

# Ajust date
RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/Brazil/East /etc/localtime

RUN chmod +x startup.sh
RUN service nginx configtest

EXPOSE 80

ENTRYPOINT ["./startup.sh"]