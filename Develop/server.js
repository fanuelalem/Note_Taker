const express = require("express");

const apiRoutes = require("./routes/apiRoutes");

const htmlRoutes = require("./routes/htmlRoutes");


const app = express();
let PORT = process.env.PORT 
if(PORT == null || PORT == ""){
    PORT = 5000
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


 
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
