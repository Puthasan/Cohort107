const express = require("express");
const productsRoutes = require('./routes/products')

const app = express();
const PORT = 3000;

//* middleware function
const logger = (req, res, next) => {
  console.log(`Received request to route ${req.url}`);
  next();
}

app.use(logger);
app.use('/products', productsRoutes)
//*

//* ERROR Middleware
app.use ((err, req, res, next) => {
  res.status(400).send(err.message)
})


app.get("/", (req, res) => {
  console.log(req.url);
  // throw Error('Something went really bad!')

  res.send("<h1>Hello Hello!@!!@</h1>");
});

app.get("/products", (req, res) => {
  console.log(req.url);

  res.send("<h1>Products Page</h1>");
});

app.get("/user", (req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.send("Sending the user info!");
});

app.post("/user", (req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.send("Creating new user for now....");
});

app.get("/user/:userID", (req, res) => {
  console.log("Params Object ===>", req.params);

  res.send("test");
});

app.get("/user/:username/:password", (req, res) => {
  console.log(req.params);

  res.send(`Sending Profile For User: ${req.params.userID}`);
});

app
  .route("/learner")
  .get((req, res) => {
    console.log(req.url);
    res.send("Sending learner data");
  })
  .post((req, res) => {
    console.log(req.url);
    res.send("Creating new learner");
  });

app.listen(PORT, () => {
  console.log(`Server is running!`);
});
