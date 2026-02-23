import mysql from "mysql2/promise";


const pool = mysql.createPool({

  user: 'root',
  host: 'localhost',
  password: '#Onkie9804.#',
  database: 'B2C_future_B2B_PartnersStaff'
});

pool.getConnection()
  .then(() => console.log("It's working "))
  .catch(err => console.error("It's not working ", err));

  export default pool;