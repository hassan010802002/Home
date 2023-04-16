import express from "express";
import { engine } from "express-handlebars";
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./HandleBars_Temps");

let users = [
  {
    id: 1,
    name: "Hassan",
    city: "Ashmoun",
  },
  {
    id: 2,
    name: "Mohammed",
    city: "Cairo",
  },
  {
    id: 3,
    name: "Ahmed",
    city: "ALEX",
  },
  {
    id: 4,
    name: "Yasser",
    city: "Tanta",
  },
  {
    id: 5,
    name: "Ali",
    city: "Shibeen",
  },
];

let LI_Fun = (request, response) => {
  response.render("Lists", { layout: false, users });
  console.log("The Application is Running Successfully");
};

let Item_Fun = (req, res) => {
  let ids = req.params.id;
  let item = users.find((user) => {
    return user.id == ids;
  });
  res.render("User", { layout: false, data: item });
};

app.get("/lists/:id", Item_Fun);

app.get("/lists", LI_Fun);

app.listen(7000);
