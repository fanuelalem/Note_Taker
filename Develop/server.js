const express = require("express");

const apiRoutes = require("./routes/apiRoutes");

const htmlRoutes = require("./routes/htmlRoutes");


const app = express();
const PORT = process.env.PORT || 5000;
// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
