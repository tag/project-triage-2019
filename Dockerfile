FROM httpd:2.4
# We could use `php:7.3.8-apache`, (and we will later) but we don't need PHP right now

LABEL maintainer="Tom Gregory"

COPY app/public /srv/app/public
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
