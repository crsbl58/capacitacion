import express from "express";
import pool from "../utils/database";
const app = express();
app.set("port", 3001);

app.use(express.json());

const newUser = async (req: any, res: any) => {
  const user = req.body.user;

  pool.query(
    `INSERT INTO app."user"
        (id, person_id, hash)
        VALUES (gen_random_uuid(), $1, $2)`,
    [user.person_id, user.hash],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("new user ready");
      /* pool.end(); */
    }
  );
};
const newPerson = async (req: any, res: any) => {
  const person = req.body.person;
  pool.query(
    `INSERT INTO app.person (id, rut, "name",
         paternallastname, maternallastname,
         email, phone, address, district) VALUES
        (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      person.rut,
      person.name,
      person.paternallastname,
      person.maternallastname,
      person.email,
      person.phone,
      person.address,
      person.district,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("new person ready");
 /*      pool.end(); */
    }
  );
};

app.post("/NewUser", (req, res) => {
  newPerson(req, res);
  newUser(req, res);
});

app.listen(3001, () => {
  console.log("server...");
});
