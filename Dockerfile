FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY nonton-film-series-indonesia.html /usr/share/nginx/html/nonton-film-series-indonesia.html
COPY akses-noobz-streaming.html /usr/share/nginx/html/akses-noobz-streaming.html
COPY update-noobz-telegram.html /usr/share/nginx/html/update-noobz-telegram.html
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY public /usr/share/nginx/html/public

EXPOSE 3009
