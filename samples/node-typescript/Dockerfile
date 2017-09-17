# Node & TypeScript Docker App Sample
# docker build -t spugachev/webtest .
# docker run -d -p 3000:3000 --restart=always --name webapp spugachev/webtest

FROM node:8-alpine				

LABEL maintainer="spugachev@gmail.com"
ENV PORT 3000
ENV APP_DIR /var/www/app/

ADD . $APP_DIR			
WORKDIR $APP_DIR	
		
RUN npm install	
RUN npm run build	
RUN npm prune --production

EXPOSE $PORT
CMD ["npm", "run", "prod"]