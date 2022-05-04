import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7185685910f76b",
    pass: "81cc8a76abf686",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Luana de Moraes <moraeslua66@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<div styles="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feeedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join(""),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running on 3333 port");
});
