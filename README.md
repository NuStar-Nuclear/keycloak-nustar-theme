## Keycloak NuStar Theme

Copy new theme to container

```sh
docker cp nustar <container>:/opt/jboss/keycloak/themes
```

Delete cache to apply theme update

```sh
docker exec -ti <container> bash
rm -rf /opt/jboss/keycloak/standalone/tmp/kc-gzip-cache/<cache-id>
```
