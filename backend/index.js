const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

app.use("/api/v1", userRoutes);

// CORS Configuration

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 619d016d44142607c26020054e957d3d6eaaeaa4
