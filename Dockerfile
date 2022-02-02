FROM alpine AS node
WORKDIR /app
RUN apk add --no-cache nodejs

FROM node AS npm
RUN apk add --no-cache npm

FROM npm AS dependencies
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci --production --ignore-scripts

FROM npm AS build
RUN npm install husky --save-dev
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node
ENV NODE_ENV production
COPY next-i18next.config.js ./
COPY next.config.js ./
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
CMD node ./node_modules/.bin/next start -p 80
