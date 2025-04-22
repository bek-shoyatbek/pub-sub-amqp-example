# Pub-Sub Example with RabbitMQ

This project demonstrates a simple **Publisher-Subscriber (Pub-Sub)** pattern using **RabbitMQ** and **AMQP protocol** in Node.js. It includes a publisher that sends messages to a queue and a consumer that processes those messages. This is a great starting point for learning how to use RabbitMQ for message queuing and asynchronous communication.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Publisher](#running-the-publisher)
  - [Running the Consumer](#running-the-consumer)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Implements the **Publisher-Subscriber** pattern using RabbitMQ.
- Publishes messages to a queue.
- Consumes messages from the queue and processes them.
- Uses **AMQP protocol** for communication.
- Lightweight and easy-to-understand example for beginners.

---

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v16 or later)
2. **RabbitMQ** server running locally or on the cloud.
3. A `.env` file with the following environment variables:
   ```env
   CLOUDAMQ_URL=amqp://<your-rabbitmq-url>
   JOB_QUEUE=<your-queue-name>
   ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pub-sub-amqp-example.git
   cd pub-sub-amqp-example
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your RabbitMQ connection details:
   ```env
   CLOUDAMQ_URL=amqp://localhost
   JOB_QUEUE=jobs
   ```

---

## Usage

### Running the Publisher

The publisher sends a message to the RabbitMQ queue. You can pass a number as an argument to simulate a job.

1. Run the publisher:
   ```bash
   node publisher.js <number>
   ```

   Example:
   ```bash
   node publisher.js 42
   ```

   Output:
   ```
   Job sent successfully 42
   ```

### Running the Consumer

The consumer listens to the RabbitMQ queue and processes incoming messages.

1. Run the consumer:
   ```bash
   node consumer.js
   ```

   Output (when a job is received):
   ```
   Received job with input 42
   ```

---

## Project Structure

```
pub-sub-amqp-example/
├── publisher.js       # Publishes messages to the RabbitMQ queue
├── consumer.js        # Consumes messages from the RabbitMQ queue
├── config.js          # Configuration file for environment variables
├── package.json       # Project metadata and dependencies
└── .env               # Environment variables (not included in the repo)
```

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **amqplib**: A library for working with RabbitMQ and AMQP protocol.
- **dotenv**: For managing environment variables.
- **nodemon**: For automatic server restarts during development.

---

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the **ISC License**. Feel free to use and modify it as needed.

---

## Acknowledgments

- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [amqplib GitHub Repository](https://github.com/amqp-node/amqplib)