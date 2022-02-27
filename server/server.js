const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

// Connect database
connectDB();

// Initialise app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/todos", require("./routes/todoRoutes"));

// Serve the front end
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) =>
    res.send("Please set node environment to production")
  );
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
