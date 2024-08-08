# SIP Returns Calculator (%)

This web application calculates the returns on a Systematic Investment Plan (SIP). Built with **Vite** for fast development, **React** for a robust UI, and **Tailwind CSS** for modern and responsive styling.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features
- **Real-time Calculation**: Calculate SIP returns dynamically as you input data.
- **Responsive Design**: Built with Tailwind CSS, the app is responsive across devices.
- **Fast and Lightweight**: Powered by Vite for instant development server start and optimized builds.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mounishvatti/sipreturnscalc.git
   cd sipreturnscalc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage
- Enter the monthly SIP amount, the annual interest rate, and the investment duration.
- The app will calculate the expected returns instantly.

## Technologies Used
- **[Vite](https://vitejs.dev/)**: Fast and optimized frontend tooling.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## Project Structure
```bash
sipreturnscalc/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── App.jsx           # Main app component
│   ├── index.css         # Tailwind CSS import
│   └── main.jsx          
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
└── tailwind.config.js    
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
