const express = require("express");
const app = express();
const { PORT, SERVER_URL, CLIENT_URL } = require("./constants");
const cors = require("cors");

// initialize middlewares;
app.use(express.json());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
// app.use(bodyParser.text()); STAKOVERFLOW

// import routes;
const userRoute = require("./routes/userRoute");

// import routes;
app.use("/api", userRoute);

const startApp = () => {
  try {
    app.listen(PORT, () => {
      console.log(`This app is running at ${SERVER_URL}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startApp();
