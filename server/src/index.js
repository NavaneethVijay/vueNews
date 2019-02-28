const express = require("express");
const app = express();
const config = require("../config.json");
const api = require("./api/index");
const cors = require("cors");

// Port and Host details
const PORT = process.env.PORT || config.server.port;
const HOST = process.env.HOST || config.server.host;

app.use(cors());

// Init Api
app.use("/api", api);

// Init Server
app.listen(PORT, HOST, () => {
  console.log(`Started server at http://${HOST}/${PORT}`);
});
