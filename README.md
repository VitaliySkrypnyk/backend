## Лабораторна: PostgreSQL з Docker (feature/pg-setup)

### Опис
Запустити PostgreSQL та pgAdmin через Docker Compose, підключити базу в pgAdmin, зробити скріни підключеного сервера та додати `docker-compose.yml` в репозиторій.

### Креденші (для локальної лабораторної установки)
- POSTGRES_USER: `nodejs_course_admin`
- POSTGRES_PASSWORD: `my_password`
- POSTGRES_DB: `nodejs_course_database`
- PGADMIN_DEFAULT_EMAIL: `admin@example.com`
- PGADMIN_DEFAULT_PASSWORD: `admin_password`

### Команди
Запуск:
```bash
docker-compose up -d
