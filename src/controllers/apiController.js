import fs from "fs";

// ambil file dari json ->./data/data.json

export const showMessage = (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));
  res.json(data);
};

export const createMessage = (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));

  const newMessage = {
    id: Date.now(),
    message: req.body.message
  };

  data.push(newMessage);

  fs.writeFileSync("./data/data.json", JSON.stringify(data, null, 2));
  return res.status(201).json({
    data: newMessage,
    message: "Pesanmu berhasil terkirim"
  })
};

export const messageById = (req, res) => {
  const data = JSON.parse(fs.readFile("./data/data.json", "utf8"));
  const message = data.find(m => m.id === parseInt(req.params.id));

  if (!message) {
    return res.status(404).json({ error: "Message tidak ada." });
  }

  res.json(message);
};
