const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Welcome from FEATURE branch " });
});

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(3000, ()=> console.log("API running on port 3000"));
