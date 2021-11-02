docker stop zed-testserver && docker rm zed-testserver
docker run -d -p 50051:50051 --name=zed-testserver quay.io/authzed/spicedb:v1.0.0 spicedb serve-testing
sleep 1
yarn only-run-tests
docker stop zed-testserver
docker rm zed-testserver