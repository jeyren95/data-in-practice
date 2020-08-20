const express = require("express");
const ejs = require("ejs");

const app = express();

const members = [
  {
    id: 1,
    name: "Alex Nabiswa",
    role: "Chief Executive Officer",
    image: "images/team-members/alex-nabiswa-img.jpg",
    about: "He oversees the running of Data in Practice, harnessing the power of machine learning and Big data analytics to solve social problems facing Africa. He has expertise in scientific research, technology transfer and policy advocacy.",
    background: "Alex holds a BSc in Agriculture and a MSc in Plant breeding and biotechnology from the University of Nairobi."
  },
  {
    id: 2,
    name: "Steven Onyango",
    role: "Board Member",
    image: "images/team-members/steven-onyango-img.jpg",
    about: "He is an accomplished result-oriented and dedicated person. More than 15 years’ experience in team management, business development, sales strategy development, implementation and action planning with skills in inter-personal relations, communication, team leadership and strong organizational skills.",
    background: "Steven holds BSc degree in Agri-Business Management from Egerton university and is pursuing an MBA program majoring in Strategic Management. "
  },
  {
    id: 3,
    name: "Stephen Kithisya",
    role: "Board Member",
    image: "images/team-members/stephen-kithisya-img.jpg",
    about: "He has extensive experience in policy advocacy, women and youth empowerment programs as well as value chain development. His particular expertise, include training of women and youth in agribusiness value chain in Kenya.",
    background: "He holds BSc (Actuarial Science) and M.A in   Project Planning and Management (on-going) both from the University of Nairobi."
  },
  {
    id: 4,
    name: "Boniface Makokha",
    role: "Board Member",
    image: "images/team-members/boniface-makokha-img.jpg",
    about: "With an entrepreneurial background,  Boniface brings a self-managed drive and innovative approach to his work in microfinance and capacity building. He developed and applied tools for identifying potential small/medium enterprises, conducted due-diligence and in-depth assessments, leading to recommendations for improved policies and procedures, capacity building and client training projects.",
    background: "He holds Bachelor of Business Administration from Methodist University."
  },
  {
    id: 5,
    name: "Dr Moses Wakenya",
    role: "Board Member",
    image: "images/team-members/moses-wakenya-img.jpg",
    about: "Dr Moses Nabiswa is a skilled physician dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. Experienced in a variety of healthcare settings and with many different patient age ranges, from pediatric to geriatric. Determined team player who is able to collaborate with other medical researchers utilizing big data and AI to devise effective treatment solutions.",
    background: "He holds MBChB degree from the University of Nairobi."
  },
  {
    id: 6,
    name: "Joseph Komu",
    role: "Board Member",
    image: "images/team-members/joseph-komu-img.jpg",
    about: "Main strengths include Proposal Writing, Project Management, Monitoring & Evaluation and Value Chain Development. Effective community mobilizer, workshop facilitator and trainer with practical knowledge of Computer Applications, Geographical Information Systems and Data Analysis Packages (SPSS). Key focus is to utilize ICT decision support systems for yield forecasting and deployment of digital tools for data collection on different variables in agriculture for decision-making.",
    background: "A Certified Monitoring & Evaluation, Agriculture and Rural Development Professional with 15 year’s experience working with communities in areas of Food Security and Nutrition, Environmental Resilience, Entrepreneurship, Youth and Women Empowerment."
  },
  {
    id: 7,
    name: "Belita Kambua David",
    role: "Board Member",
    image: "images/team-members/belita-kambua-david-img.jpg",
    about: "She is detail-oriented accountant specialist with extensive knowledge of accounting principles, processes, and software systems. Managed multiple high-end projects, consistently meeting deadlines while maintaining accuracy. Self-motivated and able to work well alone and as part of a team.",
    background: "She is a member of The Institute of Certified Public Accountants of Kenya (ICPAK) and Hold s B.A and MBA (FINANCE OPTION) from the University of Nairobi."
  }
];

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
];

const volunteerOpportunities = [
  {
    roleTitle: "Data Scientist",
    roleType: "Full-time, Contract",
    roleDeadline: "-",
    roleLink: "data-scientist"
  },
  {
    roleTitle: "Cloud/Data Architect",
    roleType: "Full-time, Contract",
    roleDeadline: "-",
    roleLink: "cloud-architect"
  }
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home", {
    projects: projects,
    members: members
  });
});

app.get("/careers-form", function(req, res) {
  res.render("careers-form");
});

app.get("/volunteer-opportunities", function(req, res) {
  res.render("volunteer-opportunities", {
    volunteerOpportunities: volunteerOpportunities
  });
});

app.get("/volunteer-opportunities/data-scientist", function(req, res) {
  res.render("volunteer-data-scientist");
});

app.get("/volunteer-opportunities/cloud-architect", function(req, res) {
  res.render("volunteer-cloud-architect");
});

app.get("/volunteer-form", function(req, res) {
  res.render("volunteer-form", {
    volunteerOpportunities: volunteerOpportunities
  });
});

app.listen(3000, () => {
  console.log("Server successfully running on port 3000")
});
