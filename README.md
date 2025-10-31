# My Server Management

## 👋 Welcome!

Hello and welcome to the My Server Management project! This is a lightweight, centralized Express.js server designed to handle backend functionalities for my personal applications and projects that don't require a full-fledged, dedicated backend.

It's built to be simple, extensible, and easy to manage, providing a reliable solution for handling tasks like sending emails, processing forms, and more.

## ✨ About The Project

This project acts as a central API gateway for my various frontend applications. The main goal is to abstract away common backend services into a single, manageable server.

*   **Centralized Logic:** Manages backend services for multiple client apps from one place.
*   **Email Service:** Integrated with Nodemailer to handle email sending, for contact forms for example.
*   **Scalable:** Organized routing and service structure to easily add new functionalities.
*   **Lightweight:** Built with Express.js for a minimal and efficient footprint.

## 🛠️ Built With

This project leverages a modern and efficient tech stack to provide robust backend services.

*   [**Node.js**](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   [**Express.js**](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
*   [**TypeScript**](https://www.typescriptlang.org/) - Typed JavaScript for building reliable and scalable applications.
*   [**Nodemailer**](https://nodemailer.com/) - A module for Node.js applications to allow easy as cake email sending.
*   [**Dotenv**](https://github.com/motdotla/dotenv) - For managing environment variables.
*   [**CORS**](https://github.com/expressjs/cors) - For handling Cross-Origin Resource Sharing.

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   **npm**
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/andresajrb/my-server-management.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-server-management
    ```
3.  Install the project dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root of the project and add the necessary environment variables (see the section below).

### Running the Application

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
```

This will start the server with `ts-node`. The server will be running on the port you specify in your `.env` file.

## ⚙️ Environment Variables

This project uses a `.env` file to manage environment variables. Create a `.env` file in the root of the project and add the following variables.

*   `PORT`: The port on which the Express server will run. (e.g., `PORT=3001`)
*   `NODE_ENV`: The environment for running the server, usually `local` (for development) or `production`.
*   `EMAIL_SMTP_KEY`: The API key o contraseña SMTP para autenticar el envío de correos.

Example `.env` file: