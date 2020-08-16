const express = require("express");
const ejs = require("ejs");

const app = express();

const members = [
  {
    name: "Alex Nabiswa",
    role: "Founder & Executive Director",
    image: "images/team-members/alex-nabiswa-img.jpg"
  },
  {
    name: "Steven Onyango",
    role: "Board Member",
    image: "images/team-members/steven-onyango-img.jpg"
  },
  {
    name: "Stephen Kithisya",
    role: "Board Member",
    image: "images/team-members/stephen-kithisya-img.jpg"
  },
  {
    name: "Boniface Makokha",
    role: "Board Member",
    image: "images/team-members/boniface-makokha-img.jpg"
  },
  {
    name: "Dr Moses Wakenya",
    role: "Board Member",
    image: "images/team-members/moses-wakenya-img.jpg"
  }
]

const projects = [
  {
    projectName: "COVID-19 Response",
    articleLink: "",
    imageLink: "images/projects/covid-project.jpg"
  },
  {
    projectName: "Big Data In Education",
    articleLink: "",
    imageLink: "images/projects/education-project.jpg"
  },
  {
    projectName: "Fighting Hunger",
    articleLink: "",
    imageLink: "images/projects/hunger-project.jpg"
  }
]

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home", {
    projects: projects,
    members: members
  });
});

app.get("/careers", function(req, res) {
  res.render("careers");
});

app.get("/volunteer", function(req, res) {
  res.render("volunteer");
});


app.listen(3000, () => {
  console.log("Server successfully running on port 3000")
});
