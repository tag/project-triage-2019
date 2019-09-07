FROM php:7.3.8-apache
# We could use `httpd:2.4`, as we don't need PHP right now, but the config files
# in that image are in a different place. This is easier in the long run.

LABEL maintainer="Cameron Bland"

COPY public /srv/app/public
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
