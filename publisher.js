import amqplib from "amqplib";
import { CLOUDAMQ_URL, JOB_QUEUE } from "./config.js";


const msg = { number: process.argv[2] };

const publisher = async () => {
  const queue = JOB_QUEUE;
  const conn = await amqplib.connect(CLOUDAMQ_URL);

  const channel = await conn.createChannel();
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
  console.log(`Job sent successfully ${msg.number}`);

  await channel.close();
  await conn.close();
};

publisher();
