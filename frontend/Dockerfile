FROM node:20.9.0-alpine AS base
WORKDIR /usr/src/app
COPY ./frontend/package.* ./
RUN npm install
COPY ./frontend .

FROM base AS dev
EXPOSE 4200
CMD ["npm", "run", "start"]

FROM base AS build
RUN npm run build

FROM nginx:1.25.1-alpine AS prod
COPY --from=build /usr/src/app/dist/odourcollect /usr/share/nginx/html
COPY ./deployment/config/nginx-frontend.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
