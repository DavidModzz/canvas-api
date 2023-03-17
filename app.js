var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var secure = require("ssl-express-www");

const PORT = 3000;

var mainrouter = require("./routes/apis");

var app = express();
app.enable("trust proxy");
app.use(morgan("dev"));
app.set("json spaces", 2);
app.use(cors());
app.use(secure);

app.use("/api", mainrouter);

app.get("/", async (req, res, next) => {
  res.json({
    endpoints: {
      maker: {
        welcome: "/api/maker/welcome",
        goodbye: "/api/maker/goodbye",
        circle: "/api/maker/circle",
        beautiful: "/api/maker/beautiful",
        blur: "/api/maker/blur",
        facepalm: "/api/maker/facepalm",
        invert: "/api/maker/invert",
        rainbow: "/api/maker/rainbow",
        trigger: "/api/maker/trigger",
        wanted: "/api/maker/wanted",
        wasted: "/api/maker/wasted",
      },
    },
  });
});

app.all("*", async (req, res) => {
  res.status(404).json({
    status: 404,
    error: "Not Found!",
    endpoint: req.path,
  });
});

app.listen(PORT, () => {
  console.log("Server ready on port " + PORT);
});

module.exports = app;
