const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const cors = require('cors')

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001

// Set up body parsing, static, and route middleware
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));