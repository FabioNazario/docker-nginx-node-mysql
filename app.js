const express = require('express')
const app = express()
const port = 8080

app.get('/', (req,res) => {

  con = getConnection();

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name FROM people;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);

      const sql = `INSERT INTO people(name) values ('Fabio Nazario')`
      con.query(sql);
      nameList = listNamesFromPeople(result);
      con.end();
      res.send('<h1>Full Cycle Rocks!</h1>'
          +'<h1>' + nameList + '</h1><br>')
    });
  });
  
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

function getConnection(){
  const config = {
    host: 'mysql',
    user: 'root',
    password: '',
    database:'nodedb',
    port:3306
  };

  mysql = require('mysql');
  con = mysql.createConnection(config);

  return con;
}

function listNamesFromPeople(people){
  
  names = "";

  function printNames(element){
    names = names + element.name + "<br>"
  }

  people.forEach(printNames);

  return names;
}





