# syntax=docker/dockerfile:1

########################################
# 1) Build frontend assets (Vite/React)
########################################
FROM node:22-alpine AS frontend

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

########################################
# 2) Install PHP dependencies (Composer)
########################################
FROM composer:2 AS vendor

WORKDIR /app

COPY database/ database/
COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-interaction \
    --no-progress \
    --no-scripts \
    --optimize-autoloader \
    --prefer-dist \
    --ignore-platform-reqs

########################################
# 3) Runtime image
########################################
FROM serversideup/php:8.3-fpm-nginx AS runtime

ENV PHP_OPCACHE_ENABLE=1 \
    AUTORUN_ENABLED=true \
    AUTORUN_LARAVEL_MIGRATION=true \
    AUTORUN_LARAVEL_STORAGE_LINK=true \
    SSL_MODE=off

USER root

WORKDIR /var/www/html

COPY --chown=www-data:www-data . .
COPY --from=vendor --chown=www-data:www-data /app/vendor ./vendor
COPY --from=frontend --chown=www-data:www-data /app/public/build ./public/build

RUN php artisan config:clear \
    && touch database/database.sqlite \
    && chown www-data:www-data database/database.sqlite \
    && chmod -R 775 storage bootstrap/cache database

USER www-data

EXPOSE 8080
