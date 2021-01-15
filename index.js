const express = require("express");

const app = express();

// Routing Users
// Create users
app.post("/users", (req, res) => res.send("routing untuk create users"));
// Read users
app.get("/users", (req, res) => res.send("routing untuk read users"));
// Update users
app.put("/users", (req, res) => res.send("routing untuk update users"));
// Delete users
app.delete("/users", (req, res) => res.send("routing untuk delete users"));

// Routing tasks
// Create tasks
app.post("/tasks", (req, res) => res.send("routing untuk create tasks"));
// Read tasks
app.get("/tasks", (req, res) => res.send("routing untuk read tasks"));
// Update tasks
app.put("/tasks", (req, res) => res.send("routing untuk update tasks"));
// Delete users
app.delete("/tasks", (req, res) => res.send("routing untuk delete tasks"));

app.listen(5000, () => console.log("this app running on port 5000"));
