const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const PORT = 3000;
let data = require("./data.json");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

app.get("/ims/subscriber/:phoneNumber", (req, res) => {
  const subscriber = data.subscribers.find(
    (subscriber) => subscriber.phoneNumber === req.params.phoneNumber
  );

  if (!subscriber) {
    return res.status(400).send({
      message: `Cannot find subscriber with phone number: ${req.params.phoneNumber}`,
    });
  }

  return res.status(200).send(subscriber);
});

app.put("/ims/subscriber/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const subscriberIndex = data.subscribers.findIndex(
    (subscriber) => subscriber.phoneNumber === phoneNumber
  );

  if (subscriberIndex !== -1) {
    data.subscribers[subscriberIndex] = {
      ...data[subscriberIndex],
      ...req.body,
    };
    fs.writeFileSync("data.json", JSON.stringify(data));
    return res.status(201).send({
      message: `Created new subscriber with phone number ${phoneNumber}`,
    });
  }

  data.subscribers.push({ ...req.body, phoneNumber });
  fs.writeFileSync("data.json", JSON.stringify(data));
  return res.status(200).send({
    message: `Updated subscriber with phone number ${phoneNumber}`,
  });
});

app.delete("/ims/subscriber/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;

  const subscriberIndex = data.subscribers.findIndex(
    (subscriber) => subscriber.phoneNumber === phoneNumber
  );

  if (subscriberIndex === -1) {
    return res.status(202).send({
      message: `No action needed. Phone number ${phoneNumber} already does not exist.`,
    });
  }

  const updatedData = data;
  updatedData.subscribers.splice(subscriberIndex, 1);

  fs.writeFileSync("data.json", JSON.stringify(updatedData));
  return res
    .status(200)
    .send({ message: `phone number ${phoneNumber} is deleted` });
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
