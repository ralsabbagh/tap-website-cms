#!/bin/sh
# This is a comment!

echo "docker run process..."

#echo "APP_VERSION : $1"
#echo "APP_NAME : $2"
#echo "DOCKERHUB_USER : $3"
#echo "DOCKERHUB_PASS : $4"

export APP_VERSION=$1
export APP_NAME=$2
export APP_ENV=$5
DOCKERHUB_USER=$3
DOCKERHUB_PASS=$4
echo "Vetri $APP_NAME app restart Process"
#printenv | grep -i APP
#exit 1

cd /
pwd
cd /home/s.kumar/deploy_$APP_NAME
pwd

sh ./dockerClean.sh $APP_NAME

echo "Login to docker registry..."
echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin "hub.docker.tap.company"

echo "Pull image from docker registry"
docker pull hub.docker.tap.company/tap/$APP_NAME:$APP_VERSION

#docker-compose -f deploy-docker-compose.yml config

echo "stop the service"
docker-compose -f deploy-docker-compose.yml down

echo "start the service - $APP_NAME:$APP_VERSION"
docker-compose -f deploy-docker-compose.yml up -d

echo "All done ************************"

