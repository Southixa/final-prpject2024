import mysql from "mysql";

// var con = mysql.createConnection({
//   host: "mysql-174519-0.cloudclusters.net",
//   user: "admin",
//   password: "ay9QPToE",
//   port: "18467",
//   database: "finalproject2024",
// });

var con = mysql.createConnection({
  host: "mysql-175461-0.cloudclusters.net",
  user: "admin",
  password: "QUmeABbz",
  port: "10020",
  database: "finalproject2024",
  timezone: 'Z'
});



con.connect((error) => {
  if (error) {
    console.log("failed to connect to db!");
    throw error
  };

  console.log("Connected to MySQL database!");
});

export default con;
