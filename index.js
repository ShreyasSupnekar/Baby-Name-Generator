import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  
  const randomAdj=adj[Math.floor(Math.random()*adj.length)]
  
  res.render("index.ejs",{adjective: randomAdj});
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "Aria",
  "Ethan",
  "Luna",
  "Oliver",
  "Isabella",
  "Noah",
  "Mia",
  "Liam",
  "Ava",
  "Jackson",
  "Sophia",
  "Lucas",
  "Amelia",
  "Muhammad",
  "Harper",
  "Elijah",
  "Charlotte",
  "Logan",
  "Emma",
  "Carter",
  "Mila",
  "Sebastian",
  "Ella",
  "Alexander",
  "Avery",
  "James",
  "Scarlett",
  "Benjamin",
  "Zoe",
  "William",
  "Chloe",
  "Daniel",
  "Penelope",
  "Henry",
  "Sofia",
  "Michael",
  "Layla",
  "Evelyn",
  "Jacob",
  "Victoria",
  "Aiden",
  "Grace",
  "Matthew",
  "Riley",
  "Olivia",
  "David",
  "Liam",
  "Nora",
  "Leo",
  "Aria",
  "Samuel",
  "Hannah",
  "Joseph",
  "Lucy",
  "Anthony",
  "Anna",
  "Andrew",
  "Levi",
  "Gabriel",
  "Stella",
  "Joshua",
  "Maya",
  "John",
  "Eva",
  "Caleb",
  "Skylar",
  "Dylan",
  "Aurora",
  "Eli",
  "Lillian"
];

  