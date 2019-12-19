const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials"); //sets up variable directory for hbs
const viewsPath = path.join(__dirname, "../templates/views"); //where to find hbs files
//setup handlebars engine and views location
app.set("view engine", "hbs"); //telling express/node to use handlebars for templates
app.set("views", viewsPath); //telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath); //telling program where to ref. partials from
//static asset dir (css, img, front end js)
app.use(express.static(publicDirectoryPath));

app.get("", async (req, res) => {
  try {
    res.render("index", {
      title: "Our First Express App" //sets hbs var value?
    });
  } catch {
    res.status(500).send();
  }
});
app.get("/about/:id", async (req, res) => {
  const name = req.params.id; //?
  try {
    res.render("index", { //load index.hbs
      title: name //set title to name for index.hbs
    });
  } catch {
    res.status(500).send();
  }
});
app.get("/anything", async (req, res) => { //display for /anything extension
  try {
    res.render("swag"); //load swag.hbs
  } catch {
    res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log("Port 3000 speaks.");
  console.log(viewsPath);
});

//127.0.0.1:3000
//or
//localhost:3000