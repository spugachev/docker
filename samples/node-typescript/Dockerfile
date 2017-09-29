# Node & TypeScript Docker App Sample
# docker build -t spugachev/webtest .
# docker run -d -p 3000:3000 --restart=always --name webapp spugachev/webtest

FROM node:8 as build			
LABEL maintainer="spugachev@gmail.com"

ADD . /var/www/app/			
WORKDIR /var/www/app/	
		
RUN npm install	
RUN npm run build	
RUN npm prune --production

FROM node:8

WORKDIR /var/www/app/
COPY static ./static
COPY package.json ./package.json
COPY --from=build /var/www/app/dist /var/www/app/dist

RUN npm install --production

ENV PORT 3000
EXPOSE $PORT

HEALTHCHECK --interval=10s --timeout=3s --retries=5 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["npm", "run", "prod"]