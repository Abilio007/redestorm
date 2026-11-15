const sqlite = require("sqlite3");
const dbname = "redstorm";

const db = new sqlite.Database(`./${dbname}` + ".db", (error)=>{
    error ? console.log("Falha ao criar db: ", error) : console.log("db criada com sucesso!");
});

module.export = db;