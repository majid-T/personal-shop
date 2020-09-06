# This repo is set for renovation

 <div align="center" >
      <img
        src="./undCon.gif"
        alt="under construction"
        width="75%"
        height="75%"
      />
  </div>

# What is this repo

This is a an example of using ReactJs as frontend and Django Python for backend and make them communicate and send/receive data by REST calls.

# REST API endpoints

| HTTP Method | path               | input                    | output                                      |
| ----------- | ------------------ | ------------------------ | ------------------------------------------- |
| GET         | /api/shopItems/    | null                     | JSON List of all items                      |
| POST        | /api/shopItems/    | name,desc,price,quantity | Adds new shopItem                           |
| GET         | /api/shopItems/:id | null                     | JSON object of shopItem with id provided    |
| PUT         | /api/shopItems/:id | name,desc,price,quantity | updates object of shopItem with id provided |
| DELETE      | /api/shopItems/:id | null                     | DELETE object of shopItem with id provided  |
