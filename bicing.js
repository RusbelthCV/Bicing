const fetch = require("node-fetch");
const paramBicis = parseInt(process.argv[2]);

fetch("http://api.citybik.es/v2/networks/bicing")
.then(res => res.json())
.then(datos => datos.network.stations.filter(el => el["empty_slots"] >= paramBicis))
.then(filtrado => console.log(filtrado))
.catch(err => console.log(err));