$output = docker ps
$container_id = ($output[1] -split, "   ")[0]
docker exec -it $container_id bash