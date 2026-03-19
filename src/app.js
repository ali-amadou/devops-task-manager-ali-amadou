const express = require('express');
const app = express();
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running (Lab2)" });
});

// Task routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// Only start server if this file is run directly
if (require.main === module) {
  app.listen(3000, () => console.log("API running on port 3000"));
}

module.exports = app;