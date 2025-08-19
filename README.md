## About the project:

Обычный сайт для TO-DO созданий задач. Есть JWT аутентификация, о том как войти ниже.

Это один из самых первых проектов и первый fullstack проект, есть говнокод).

## Stack:

+ Backend: C#, ASP.NET Core, Dapper, Automapper, Healthcheck.
+ Databases: Postgres, Redis.
+ Frontend: TypeScript, HTML, CSS, React.ts.

## To Run:

1) Создайте user secrets (об этом ниже)
2) Откройте локально Postgres на 5432 и Redis 6379 портах
3) dotnet run (serverapp), для проверки можете зайти в localhost:4505/swagger/index.html
4) npm start (clientappypQ)
5) Открой localhost:3000

## API Overview:

+ Auth (/api)
    - POST /login → Login, send a code to your email
    - POST /accountcreate → Register new account, send a code to your email
    - PUT /coderesend/{userId} → Resend email verification code
    - POST /emailverify → Verify email, get tokens
    - PUT /tokensupdate → Refresh access & refresh tokens
    - GET /userinfo → Get current user info (requires auth)


+ Notes (/api/notes)
    - GET / → Get notes (pagination + search)
    - GET /{id} → Get note by id
    - POST / → Create note
    - PUT / → Update note
    - DELETE /{id} → Delete note

## To Log in:

1) Зайди в Login или Registration на сайте
2) Напишите свои данные
3) Подвердите свой email

## How to create User Secrets:

1) Создайте json файл 0c94447c-f01b-4ffe-9194-b6994dcd3dee.json в /home/yourusername/.microsoft/usersecrets/ (если
   пользуетесь Linux-ом)
2) Закиньте это в созданный файл (поменяйте EMAILPASSWORD и YOURPOSTGRESPASSWORD на свои):

```json
{
  "UserSecrets": {
    "Email": {
      "Address": "top2topf@yandex.ru",
      "Password": "EMAILPASSWORD"
    },
    "RedisConnectionStr": "127.0.0.1:6379",
    "PostgresConnectionStr": "Database=notesdb;Server=localhost;Port=5432;User Id = postgres;Password=YOURPOSTGRESPASSWORD",
    "Jwt": {
      "Issuer": "localhost",
      "AlgorithmForAccessToken": "HS256",
      "AccessTokenExpiresMinutes": 15,
      "AccessTokenNameInCookies": "jwtToken",
      "AccessTokenSecretKey": "accesstokensecretkeyaccesstokensecretkeyaccesstokensecretkeyaccesstokensecretkey",
      "AlgorithmForRefreshToken": "RS256",
      "RefreshTokenExpiresDays": 10,
      "RefreshTokenNameInCookies": "jwtToken",
      "RefreshTokenSecretKey": "secretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeyvsecretKeysecretKeysecretKey"
    }
  }
}
```