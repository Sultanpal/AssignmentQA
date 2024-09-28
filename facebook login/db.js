const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

// Part 1: List of 10 users
let users = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", password: "john123" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", password: "jane123" },
  { id: 3, firstName: "Mark", lastName: "Johnson", email: "mark.johnson@example.com", password: "mark123" },
  { id: 4, firstName: "Emily", lastName: "Davis", email: "emily.davis@example.com", password: "emily123" },
  { id: 5, firstName: "Michael", lastName: "Brown", email: "michael.brown@example.com", password: "michael123" },
  { id: 6, firstName: "Laura", lastName: "Miller", email: "laura.miller@example.com", password: "laura123" },
  { id: 7, firstName: "Robert", lastName: "Wilson", email: "robert.wilson@example.com", password: "robert123" },
  { id: 8, firstName: "Sophia", lastName: "Taylor", email: "sophia.taylor@example.com", password: "sophia123" },
  { id: 9, firstName: "James", lastName: "Moore", email: "james.moore@example.com", password: "james123" },
  { id: 10, firstName: "Olivia", lastName: "Anderson", email: "olivia.anderson@example.com", password: "olivia123" }
];

// Part 2: Check if a user exists (for signup validation) and add new user if not exists
app.post("/signup", (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
  const firstname = parseInt(req.query.firstname);
  const lastname = parseInt(req.query.lastname);
  const email = parseInt(req.query.email);
  const password = parseInt(req.query.password);

  // Check if the user already exists by email
//   const userExists = users.one(user => user.email === email);

//   if (userExists) {
//     return res.status(400).json({ message: "User already exists" });
//   }

  // If user does not exist, create a new user
  const newUser = {
    id: users.length + 1,  // Auto increment ID
    firstName,
    lastName,
    email,
    password
  };

  users.push(newUser);

  return res.status(201).json({ message: "User created successfully", user: newUser });
});

app.listen(200)