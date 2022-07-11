const express = require("express");
const path = require("path");

const app = express();
//loading files
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

//loading spa
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

//starting server
app.listen(process.env.PORT || 3000, () =>
  console.log("Server running like this")
);
