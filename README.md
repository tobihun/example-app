# Example application as monorepo 
- Author: Tobias Hundt

## Frontend
- React frontend with redux rtk, mui and three
- Served via nginx in a docker container
- [localhost:8081](http://localhost:8081)

## Backend
- Django backend with django rest and knox 
- Nginx as a sidecar container
- Served via nginx and gunicorn under localhost:8080
- API available under localhost:8080/api
- Admin panel avialable under [localhost:8080/admin](http://localhost:8080/admin)

## Test user and django superuser (admin panel)
- Username: test
- Password: 12345Test

## Build with docker compose
```
docker-compose up
```

## License
- PLease check license of used packages
- Used packages you will find here:
    - Frontend: ./backend/backend_django/requirements
    - Backend: ./frontend/frontend_react/frontend/package.json
    - Docker and docker-compose
    - Nginx