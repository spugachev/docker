```bash
docker login
docker build -t reg.corp.spugachev.com/webtest:latest .
docker push reg.corp.spugachev.com/webtest:latest
docker push spugachev/webtest
#--------------------------
docker build -t spugachev/webtest .
docker run -d -p 3000:3000 --restart=always spugachev/webtest
#--------------------------
docker swarm init --advertise-addr 192.168.1.10
docker node ls

docker node update --label-add myrole=prod srv1
docker node update --label-add myrole=prod srv2
docker node update --label-add myrole=dev srv3
docker node inspect srv1

# docker stack deploy --with-registry-auth --compose-file=docker-compose.yml myapp
docker stack deploy --compose-file=docker-compose.yml myapp

docker service ls
docker service ps myapp
docker service scale myapp_webapp=3

docker service logs myapp_webapp

# /run/secrets/<secret_name>
docker secret create my_secret_data secret.txt
docker secret ls

docker plugin ls
#--------------------------
docker service create --name nginx --replicas 3 --constraint 'node.labels.myrole == dev' nginx
docker network create -d overlay test_net 
docker network inspect test_net
#--------------------------
sudo ssh -fNL 80:localhost:80 -p 2200 spugachev@flystermgmt.northeurope.cloudapp.azure.com -i ~/.ssh/id_rsa

# http://localhost/marathon/
# DC/OS: http://localhost:80/
# Marathon: http://localhost:80/marathon
# Mesos: http://localhost:80/mesos

# http://flysteragents.northeurope.cloudapp.azure.com
# "hostPort": 80
# Optional -> Accepted Resource Roles: slave_public

# https://docs.microsoft.com/en-us/azure/container-service/container-service-mesos-marathon-ui
# --------------------------
# https://duckduckgo.com/?q=docker+cheatsheet&t=ipad&ia=cheatsheet&iax=1
```