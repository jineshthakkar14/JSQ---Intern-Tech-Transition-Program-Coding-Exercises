# React Password Generator with Tailwind CSS

This project is a password generator built with **React** (version **18.2**) and **Tailwind CSS** (version **3.2**). It allows users to generate customizable passwords with various options, including password length and character types.

## Features

- Generate random passwords based on user preferences
- Customize password length (1-20 characters)
- Include/exclude lowercase, uppercase, numbers, and symbols
- Real-time password strength evaluation
- Copy generated password to clipboard with a notification

## Using Docker

This project can also be run using Docker. Follow the steps below:

1. Make sure you have Docker and Docker Compose installed on your machine.

2. Build and run the application using Docker Compose:
    ```sh
    docker-compose up --build -d
    ```

3. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.

## WIthout Docker

To get started with this password generator project, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/yourusername/react-password-generator.git
    ```

2. Install the required packages.
    ```sh
    cd react-password-generator
    npm install
    ```

3. Start the development server.
    ```sh
    npm start
    ```

4. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view the password generator.

5. Customize the password settings and click the generate button to create your password. Use the copy icon to copy the password to your clipboard.

## Project Structure

- **src/components**: Contains the main components such as `PasswordGenerator`.
- **src/styles**: Add any custom styles or additional CSS files here.

The project is set up to use `postcss-cli` to process your CSS files. You can also create your own `tailwind.config.js` file to customize your Tailwind setup.

## Outcomes

![React Password Generator](https://github.com/user-attachments/assets/619c8e49-c89e-4f00-9d4b-f7c107043d54)



