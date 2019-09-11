FROM php:7.3.8-apache


LABEL maintainer="Cameron Bland"

COPY public /srv/app/public
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
