import express from "express";
import pool from "../utils/database";
const app = express();
app.set("port", 3001);

app.use(express.json());

const newUser = async (person_id: string, password: string) => {
  const resultSelectUser = await pool.query(
    `
  SELECT id FROM app."user"
  WHERE person_id=$1`,
    [person_id]
  );

  let querySelection;

  if (resultSelectUser.rows[0] !== undefined) {
    querySelection = await pool.query(
      `UPDATE app."user"
      SET hash=$1
      WHERE person_id=$2 RETURNING *`,
      [password, person_id]
    );
  } else {
    querySelection = await pool.query(
      `INSERT INTO app."user"
          (id, person_id, hash)
          VALUES (gen_random_uuid(), $1, $2) RETURNING *`,
      [person_id, password]
    );
  }
  return querySelection;
};
const newPerson = async (
  rut: string,
  name: string,
  paternallastname: string,
  maternallastname: string,
  email: string,
  phone: string,
  address: string,
  district: string
) => {
  const resultSelectPerson = await pool.query(`
SELECT  rut
FROM app.person
WHERE rut='${rut}'`);

  let querySelection;

  if (resultSelectPerson.rows[0] !== undefined) {
    querySelection = await pool.query(
      `UPDATE app.person
    SET rut=$1, "name"=$2, paternallastname=$3, maternallastname=$4,
     email=$5, phone=$6, address=$7, district=$8
    WHERE rut=$1 RETURNING *`,
      [
        rut,
        name,
        paternallastname,
        maternallastname,
        email,
        phone,
        address,
        district,
      ]
    );
  } else {
    querySelection = await pool.query(
      `INSERT INTO app.person ( rut, "name", paternallastname, maternallastname, email, phone, address, district)
       VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        rut,
        name,
        paternallastname,
        maternallastname,
        email,
        phone,
        address,
        district,
      ]
    );
  }

  return querySelection;
};

app.post("/NewUser", async (req, res) => {
  const {
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district,
    password,
  } = req.body;

  const resultPerson = await newPerson(
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district
  );

  const resultUser = await newUser(resultPerson.rows[0].id, password);

  resultUser;

   const data = {
    id: resultPerson.rows[0].id,
    user_id: resultUser.rows[0].id,
    rut: resultPerson.rows[0].rut,
    name: resultPerson.rows[0].name,
    paternallastname: resultPerson.rows[0].paternallastname,
    maternallastname: resultPerson.rows[0].maternallastname,
    email: resultPerson.rows[0].email,
    phone: resultPerson.rows[0].phone,
    address: resultPerson.rows[0].address,
    district: resultPerson.rows[0].district,
  };

  res.status(200).json(data); 
});

app.listen(3001, () => {
  console.log("server...");
});
