const express = require("express");
const { fork } = require('child_process');
const { stringify, parse } = require("querystring");
const { json } = require("express");
const { join } = require("path");

const router = express.Router();

let visitas=0

router.get("/randoms", (req, res) => {
  const cant = req.query.cant;
  const computo = fork("process.fork/random.js"); 

  if (cant){
    computo.send(cant);
  } else computo.send(100000000);
  
  computo.on("message", (data) => {
    res.json({ resultado: data });
  });
});

router.get("/info", (req, res) => {
  // console.log(process.memoryUsage());
  res.send(`      
    <h3>Plataforma:${process.platform}</h3>
    <h3>Node:${process.version}</h3>
    <h3>Memoria:${JSON.stringify(process.memoryUsage())}</h3>
    <h3>Path:${process.execPath}</h3>
    <h3>Id Process:${process.pid}</h3>
    <h3>Directorio:${process.cwd()}</h3>
    <h2>Visitas recibidas: ${++visitas}</h2>
    `);
});

module.exports = router;
