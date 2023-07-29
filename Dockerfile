FROM sa-saopaulo-1.ocir.io/grbcvhus1oua/utils/nginx-node

# COPY default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./web/build /var/www
COPY ./api/dist /var/api
COPY ./api/package.json /var/api
COPY ./api/uploads /var/uploads

# Install dependencies
RUN cd /var/api && npm install --omit=dev

RUN service nginx configtest

EXPOSE 80

ENTRYPOINT ["./startup.sh"]