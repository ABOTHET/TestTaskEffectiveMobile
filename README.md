# Тестовое задание для Effective Mobile

### Стек

- Платформа: NodeJS
- ЯП: Javascript, typescript
- Фреймворк: NestJS
- ORM: Sequelize
- Database: Postgresql
- Некоторые вспомогательные библиотеки
- Схема БД - https://drawsql.app/teams/abot/diagrams/effective-mobile

### Как установить

```
git clone https://github.com/ABOTHET/TestTaskEffectiveMobile
cd TestTaskEffectiveMobile
npm i
npm start
- После установки настрой .env(По дефолту стоят мои настройки для тестового задания)
```

### Документация

```
1. POST /users - Создать пользователя
Запрос JSON -> 
{
    "email": "test@mail.ru",
    "password": "123123",
    "name": "Valera",
    "surname": "Levin"
}
Ответ JSON -> 
{
    "uuid": "5e5d9254-9a47-47db-8da9-5fecd5045027",
    "email": "test@mail.ru",
    "password": "123123",
    "name": "Valera",
    "surname": "Levin"
}

2. GET /users - Получить всех пользователей
Запрос (пустой)
Ответ JSON -> 
[
    {
        "uuid": "5e5d9254-9a47-47db-8da9-5fecd5045027",
        "email": "test@mail.ru",
        "password": "123123",
        "name": "Valera",
        "surname": "Levin"
    }
]

3. PATCH /users/{uuid} - Изменить данные пользователя (Допустим /users/5e5d9254-9a47-47db-8da9-5fecd5045027)
Запрос (Допустим) ->
{
    "email": "newEmail@mail.ru",
    "password": "123123123"
}
Ответ JSON -> 
{
    "uuid": "5e5d9254-9a47-47db-8da9-5fecd5045027",
    "email": "newEmail@mail.ru",
    "password": "123123123",
    "name": "Valera",
    "surname": "Levin"
}

4. GET /history-actions/{uuid} - Получить историю действий пользователя по uuid (Допустим /history-actions/5e5d9254-9a47-47db-8da9-5fecd5045027)
Запрос (пустой)
Ответ JSON -> 
[
    {
        "uuid": "2a382bd3-1b79-480d-bc91-69f3064d0ad9",
        "userUuid": "5e5d9254-9a47-47db-8da9-5fecd5045027",
        "action": "был создан",
        "createdAt": "2023-10-17T06:26:32.836Z"
    },
    {
        "uuid": "953b52ed-6f61-4faa-b19a-b3cfab0e1cad",
        "userUuid": "5e5d9254-9a47-47db-8da9-5fecd5045027",
        "action": "изменил email на weuifuiwefi@mail.ru, пароль на fasfsafasfsaf",
        "createdAt": "2023-10-17T06:26:32.836Z"
    },
    {
        "uuid": "ef0fe4c5-f81b-4283-8b85-9183b4d0da74",
        "userUuid": "5e5d9254-9a47-47db-8da9-5fecd5045027",
        "action": "изменил email на newEmail@mail.ru, пароль на 123123123",
        "createdAt": "2023-10-17T06:26:32.836Z"
    }
]
```
