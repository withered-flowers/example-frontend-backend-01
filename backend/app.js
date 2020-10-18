// Import module / package express

// https://expressjs.com/en/starter/installing.html
// https://expressjs.com/en/starter/hello-world.html
// https://expressjs.com/en/starter/basic-routing.html

const express = require('express');
// invoke express, sebagai app
const app = express();

// setting port
// defaultnya untuk express dalam mode dev adalah 3000
const port = 3000;

// buat routing / endpoint
// method HTTP GET = app.get
// https://expressjs.com/en/4x/api.html#app.get.method

// method HTTP POST = app.post
// https://expressjs.com/en/4x/api.html#app.post.method

// GET /
// sebelahnya adalah parameter function (disebut dengan `callback`)
// menerima 2 parameter req dan res
// req = request = input dari browser / client
// res = response = output dari server ke browser / client

// ceritanya di sini hanya memberikan output saja
// dengan menggunakan res.send atau res.json (biar dalam bentuk json)
// format umum dalam transfer data yang `agak` kekininian.

app.get('/', function getRootHandler(req, res) {
  // array of object dari data
  const dataYangDikirimkan = [
    {
      "id": "5f8bffb2355cf3b67857cef7",
      "name": {
        "first": "Ingram",
        "last": "Ross"
      },
      "company": "GEOFORM",
      "email": "ingram.ross@geoform.us"
    },
    {
      "id": "5f8bffb2672850a93b01d9af",
      "name": {
        "first": "Carey",
        "last": "Duke"
      },
      "company": "INTERODEO",
      "email": "carey.duke@interodeo.tv"
    },
    {
      "id": "5f8bffb23a21b759a3cf2800",
      "name": {
        "first": "Lavonne",
        "last": "Rivas"
      },
      "company": "UPLINX",
      "email": "lavonne.rivas@uplinx.biz"
    }
  ];

  res.json(dataYangDikirimkan);
});

// jalankan server express
// http server built in (tidak usah apache / nginx)
app.listen(port, function listenHandler() {
  console.log(`Aplikasi ini akan berjalan di port ${port}`);
});