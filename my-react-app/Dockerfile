# Dockerfile
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/node_modules/carbon-components/css/carbon-components.min.css /usr/share/nginx/html/_carbon-styles.css

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
