const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Welcome from FEATURE branch " });
  res.json({ message: "Welcome from MAIN branch" });
  res.json({ message: "DevOps Task Manager API is running (Lab 2)..." });
});

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(3000, ()=> console.log("API running on port 3000"));
