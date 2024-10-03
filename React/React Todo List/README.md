# React & Tailwind CSS Project with Docker

This is a React project styled using Tailwind CSS, with Docker support for containerized development and deployment. It uses React version **18.2** and Tailwind CSS version **3.2**.

## Project Overview

This project is designed to demonstrate a simple to-do list with functionalities such as adding, editing, deleting, and filtering tasks (All, To-Do, Done). The UI is built using React and Tailwind CSS for a sleek and responsive interface.

## Features

- Add, edit, and delete tasks
- Filter tasks (All, To-Do, Done)
- Mark tasks as completed
- Responsive design using Tailwind CSS
- Dockerized setup for easy development and deployment

## Installation and Usage

### Using Docker

This project is Docker-ready, so you can easily set it up inside a container.

1. **Build and run the Docker container**:
    ```sh
    docker-compose up --build -d
    ```

2. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000).

### Manual Setup (without Docker)

If you prefer to run the project without Docker, follow these steps:

1. **Install the required packages**:
    ```sh
    npm install
    ```

2. **Start the development server**:
    ```sh
    npm start
    ```

3. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000).

### Tailwind CSS Configuration

The project uses Tailwind CSS, which is already configured. If you want to customize the styles, you can modify the `tailwind.config.js` and `postcss.config.js` files.

## Docker Configuration

Here’s an overview of the Docker configuration:

- **Dockerfile**: Defines how the Docker image is built.
- **docker-compose.yml**: This file is used to define and run multi-container Docker applications. Ensure it's set up for your environment.

## Outcomes

![Todo app](https://github.com/user-attachments/assets/0e7cf910-1ebc-41b4-928f-53ef7c0d220d)
