const path = require("path");
const express = require("express");

const app = express();
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Express on Vercel");
// });
// app.get("/here", (req, res) => {
//   res.sendFile(path.resolve("public/index.html"));
// });

app.listen(5000, () => console.log("Running on port 5000"));

module.exports = app;
