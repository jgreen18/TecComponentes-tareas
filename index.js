require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Database = require("./components/Database/Database");
const User = require("./components/User/User");

//componentes

//configuracion de express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Registrar componentes


app.use("/usuarios", User.api);




//levantar servidor
app.listen(3000, () => {
    console.clear();
    console.log("Task corriendo en puerto 3000");

});