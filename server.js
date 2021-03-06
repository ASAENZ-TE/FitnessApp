const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost";

// mongoose.connect(MONGODB_URI);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
   userNewUrlParser: true,
   useFindAndModify: false,
})

// Routes
app.use(require("./routes/routes"));

app.listen(port, () => {
   console.log(`http://localhost:${port}`);
});