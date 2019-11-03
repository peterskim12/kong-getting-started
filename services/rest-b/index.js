const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Bye World!"));
app.get("/:id", (req, res) => {
  setTimeout(() => res.send(`Bye World ${req.params.id}!`), Math.floor(Math.random() * 1500) + 1  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
