import amqplib from "amqplib";
import { CLOUDAMQ_URL, JOB_QUEUE } from "./config.js";



const consumer = async () => {
  const queue = JOB_QUEUE;
  const conn = await amqplib.connect(CLOUDAMQ_URL);

  const channel = await conn.createChannel();
  await channel.assertQueue(queue);
  
  channel.consume(queue, message => { 
    const input = JSON.parse(message.content.toString());
    
    console.log(`Received job with input ${input.number}`)
  });

};

consumer();