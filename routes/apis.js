var express = require("express");
var router = express.Router();
const isImageURL = require("image-url-validator").default;
const Canvas = require("canvas");
const { shortText } = require("limit-text-js");
const Canvacord = require("canvacord");
const isNumber = require("is-number");

//―――――――――――――――――――――――――――――――――――――――――― ┏ Maker ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get("/maker/circle", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.circle(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/beautiful", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.beautiful(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/blur", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.blur(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/darkness", async (req, res) => {
  var text = req.query.url;
  var no = req.query.no;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  if (!no) return res.json({ status: 400, message: "enter the parameter: no" });

  var img = await isImageURL(text);
  var n = isNumber(no);
  if (!img) return res.json({ status: 400, message: "check the image link" });
  if (!n)
    return res.json({
      status: 400,
      message: "Check if the parameter no is a number",
    });

  const hasil = await Canvacord.Canvas.darkness(text, shortText(no, 3));
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/facepalm", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.facepalm(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/invert", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.invert(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/pixelate", async (req, res) => {
  var text = req.query.url;
  var no = req.query.no;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  if (!no) return res.json({ status: 400, message: "enter the parameter: no" });

  var img = await isImageURL(text);
  var n = isNumber(no);
  if (!img) return res.json({ status: 400, message: "check the image link" });
  if (!n)
    return res.json({
      status: 400,
      message: "Check if the parameter no is a number",
    });

  const hasil = await Canvacord.Canvas.pixelate(
    text,
    convertStringToNumber(no)
  );
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/rainbow", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.rainbow(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/resize", async (req, res) => {
  var text = req.query.url;
  var width = req.query.width;
  var height = req.query.height;

  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  if (!width)
    return res.json({ status: 400, message: "enter the parameter: width" });
  if (!height)
    return res.json({ status: 400, message: "enter the parameter: height" });

  let w = width;
  let h = height;
  if (w > 1000) {
    w = "1000";
  }
  if (h > 1000) {
    h = "1000";
  }

  var img = await isImageURL(text);
  var wid = isNumber(width);
  var hei = isNumber(height);
  if (!img)
    return res.json({
      status: false,
      creator: "Alip",
      message: "[!] cek kembali url image",
    });
  if (!wid)
    return res.json({
      status: false,
      creator: "Alip",
      message: "check if width is a number",
    });
  if (!hei)
    return res.json({
      status: false,
      creator: "Alip",
      message: "check if height is a number",
    });

  const hasil = await Canvacord.Canvas.resize(
    text,
    convertStringToNumber(w),
    convertStringToNumber(h)
  );
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/trigger", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.trigger(text);
  res.set({ "Content-Type": "gif" });
  res.send(hasil);
});

router.get("/maker/wanted", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });

  const hasil = await Canvacord.Canvas.wanted(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

router.get("/maker/wasted", async (req, res) => {
  var text = req.query.url;
  if (!text)
    return res.json({ status: 400, message: "enter the parameter: url" });
  var img = await isImageURL(text);
  if (!img) return res.json({ status: 400, message: "check the image link" });
  const hasil = await Canvacord.Canvas.wasted(text);
  res.set({ "Content-Type": "image/png" });
  res.send(hasil);
});

//[ - ////////// --- Api's maker --- ////////// - ]\\

router.get("/maker/welcome", async (req, res, next) => {
  var name = req.query.name;
  var grup = req.query.gpname;
  var member = req.query.member;
  var pp = req.query.pp;
  var bg = req.query.bg;

  var imgpp = await isImageURL(pp);
  var bgimg = await isImageURL(bg);

  if (!name)
    return res.json({ status: 400, message: "enter the parameter: name" });
  if (!grup)
    return res.json({ status: 400, message: "enter the parameter: gpname" });
  if (!member)
    return res.json({ status: 400, message: "enter the parameter: member" });
  if (!pp) return res.json({ status: 400, message: "enter the parameter: pp" });
  if (!bg) return res.json({ status: 400, message: "enter the parameter: bg" });

  if (!imgpp) return res.json({ status: false, message: "check the pp link" });
  if (!bgimg) return res.json({ status: false, message: "check the bg link" });

  Canvas.registerFont("./assets/font/Creme.ttf", { family: "creme" });

  var welcomeCanvas = {};
  welcomeCanvas.create = Canvas.createCanvas(1024, 500);
  welcomeCanvas.context = welcomeCanvas.create.getContext("2d");
  welcomeCanvas.context.font = "72px creme";
  welcomeCanvas.context.fillStyle = "#ffffff";

  await Canvas.loadImage("./assets/image/wbg1.jpg").then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500);
  });

  let can = welcomeCanvas;

  await Canvas.loadImage(bg).then((bg) => {
    can.context.drawImage(bg, 320, 0, 709, 360);
  });

  let canvas = welcomeCanvas;
  canvas.context.beginPath();
  canvas.context.arc(174, 279, 115, 0, Math.PI * 2, true);
  canvas.context.stroke();
  canvas.context.fill();
  (canvas.context.font = "100px creme"), (canvas.context.textAlign = "center");
  canvas.context.fillText("Bienvenido", 670, 140);
  canvas.context.font = "100px Helvetica";
  canvas.context.fillText("____   ____", 670, 160);
  canvas.context.fillText("✩", 670, 215);
  canvas.context.font = "100px creme";
  canvas.context.fillText(shortText(grup, 17), 670, 300);
  canvas.context.font = "40px creme";
  canvas.context.textAlign = "start";
  canvas.context.fillText(shortText(name, 40), 420, 420);
  canvas.context.font = "35px creme";
  canvas.context.fillText(`miembro nº ${shortText(member, 10)}`, 430, 490);
  canvas.context.beginPath();
  canvas.context.arc(174, 279, 110, 0, Math.PI * 2, true);
  canvas.context.closePath();
  canvas.context.clip();
  await Canvas.loadImage(pp).then((pp) => {
    canvas.context.drawImage(pp, 1, 150, 300, 300);
  });

  res.set({ "Content-Type": "image/png" });
  res.send(canvas.create.toBuffer());
});

router.get("/maker/goodbye", async (req, res, next) => {
  var name = req.query.name;
  var grup = req.query.gpname;
  var pp = req.query.pp;
  var member = req.query.member;
  var bg = req.query.bg;

  var imgpp = await isImageURL(pp);
  var bgimg = await isImageURL(bg);

  if (!name)
    return res.json({ status: 400, message: "enter the parameter: name" });
  if (!grup)
    return res.json({ status: 400, message: "enter the parameter: gpname" });
  if (!member)
    return res.json({ status: 400, message: "enter the parameter: member" });
  if (!bg) return res.json({ status: 400, message: "enter the parameter: bg" });
  if (!pp) return res.json({ status: 400, message: "enter the parameter: pp" });

  if (!imgpp)
    return res.json({
      status: 400,
      creator: "Alip",
      message: "check the pp link",
    });
  if (!bgimg)
    return res.json({
      status: 400,
      creator: "Alip",
      message: "check the bg link",
    });

  Canvas.registerFont("./assets/font/Creme.ttf", { family: "creme" });

  var goobyeCanvas = {};
  goobyeCanvas.create = Canvas.createCanvas(1024, 500);
  goobyeCanvas.context = goobyeCanvas.create.getContext("2d");
  goobyeCanvas.context.font = "72px creme";
  goobyeCanvas.context.fillStyle = "#ffffff";

  await Canvas.loadImage("./assets/image/wbg1.jpg").then(async (img) => {
    goobyeCanvas.context.drawImage(img, 0, 0, 1024, 500);
  });

  let can = goobyeCanvas;

  await Canvas.loadImage(bg).then((bg) => {
    can.context.drawImage(bg, 320, 0, 709, 360);
  });

  let canvas = goobyeCanvas;
  canvas.context.beginPath();
  canvas.context.arc(174, 279, 115, 0, Math.PI * 2, true);
  canvas.context.stroke();
  canvas.context.fill();
  (canvas.context.font = "100px creme"), (canvas.context.textAlign = "center");
  canvas.context.fillText("Adiós", 670, 140);
  canvas.context.font = "100px Helvetica";
  canvas.context.fillText("____   ____", 670, 160);
  canvas.context.fillText("✩", 670, 215);
  canvas.context.font = "100px creme";
  canvas.context.fillText(shortText(grup, 17), 670, 300);
  canvas.context.font = "40px creme";
  canvas.context.textAlign = "start";
  canvas.context.fillText(shortText(name, 40), 420, 420);
  canvas.context.font = "35px creme";
  canvas.context.fillText(`miembro nº ${shortText(member, 10)}`, 430, 490);
  canvas.context.beginPath();
  canvas.context.arc(174, 279, 110, 0, Math.PI * 2, true);
  canvas.context.closePath();
  canvas.context.clip();
  await Canvas.loadImage(pp).then((pp) => {
    canvas.context.drawImage(pp, 1, 150, 300, 300);
  });

  res.set({ "Content-Type": "image/png" });
  res.send(canvas.create.toBuffer());
});

//  router.all('*', async (req, res) => {
//  res.status(404).json({
// status:404,
// error: 'Not Found!',
// endpoint: req.path
// })
// })

module.exports = router;
