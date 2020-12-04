# This repo is set for renovation

 <div align="center" >
      <img
        src="./undCon.gif"
        alt="under construction"
        width="25%"
        height="25%"
      />
  </div>

## Todo 
- Add CardLayout to home
- Add trycatch to all axios calls
- Table of Items is not responsive and scrollable

# What is this repo

This is a an example of using ReactJs as frontend and Django Python for backend and make them communicate and send/receive data by REST calls.

# REST API endpoints

| HTTP Method | path               | input                                           | output                                      |
| ----------- | ------------------ | ----------------------------------------------- | ------------------------------------------- |
| GET         | /api/shopItems/    | null                                            | JSON List of all items                      |
| POST        | /api/shopItems/    | name(string),desc(String),price(dec),quantity(int) | Adds new shopItem                           |
| GET         | /api/shopItems/:id | null                                            | JSON object of shopItem with id provided    |
| PUT         | /api/shopItems/:id | name(string),desc(String),price(dec),quantity(int) | updates object of shopItem with id provided |
| DELETE      | /api/shopItems/:id | null                                            | DELETE object of shopItem with id provided  |

# Technologies used in this repo

- [SQLite](https://www.sqlite.org/index.html) - A small, light weight, fast, self contained, SQL database engine.
- [ReactJS](https://reactjs.org/) - Frontend javascript library
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - ReactJs update to handle statefull functional components
- [axios](https://www.npmjs.com/package/axios) For sending different HTTP method requests
- [react-router](https://reactrouter.com/) - For declarative routing inside a react application
- [Font awsome](https://fontawesome.com/) - CDN for Online icons and fonts
- [Django Rest Framework](https://www.django-rest-framework.org/) - Python based Django managed REST frame work for handling Rest web services to backend system
- [Python](https://www.python.org/) - Python is a programming language that lets you work quickly and integrate systems more effectively
- [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap is CSS library for responsive mobile first design and here is customized to be used in React

## Notes on CORS error in development phase

If you are using your localhost to serve the backend and front end, your browser will block your REST calls due to CORS security feature. here is what you need to do to resolve this issue:

1. Install django-cors-headers in your django folder

```
pip install django-cors-headers
```

1. Add corsheaders to your installed apps in settings.py file

```
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]
```

1. Add middleware classes below to in settings.py file

```
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]

```

1. Add below properties in your seeting.py file

```
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
```
