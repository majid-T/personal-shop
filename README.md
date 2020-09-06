# This repo is set for renovation

 <div align="center" >
      <img
        src="./undCon.gif"
        alt="under construction"
        width="25%"
        height="25%"
      />
  </div>

# What is this repo

This is a an example of using ReactJs as frontend and Django Python for backend and make them communicate and send/receive data by REST calls.

# REST API endpoints

| HTTP Method | path               | input                                           | output                                      |
| ----------- | ------------------ | ----------------------------------------------- | ------------------------------------------- |
| GET         | /api/shopItems/    | null                                            | JSON List of all items                      |
| POST        | /api/shopItems/    | name(int),desc(String),price(dec),quantity(int) | Adds new shopItem                           |
| GET         | /api/shopItems/:id | null                                            | JSON object of shopItem with id provided    |
| PUT         | /api/shopItems/:id | name(int),desc(String),price(dec),quantity(int) | updates object of shopItem with id provided |
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
