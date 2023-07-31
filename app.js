const express = require("express");
const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

app.post("/api/v1/bot", (req, res) => {
  const request = req.body["postData"]["Content"];
  const jsonData = JSON.parse(request);

  const phoneNumber = jsonData.user.id;
  const name = jsonData.user.name;
  const textName = jsonData.message.text;
  const fromMe = jsonData.message.fromMe;
  const id = jsonData.message.id;

  console.log(phoneNumber);
  console.log(name);
  console.log(textName);
  console.log(fromMe);
  console.log(id);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// app.all("*", (req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
//   });
