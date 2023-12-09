# Smart Cash - Financial Transactions Record

## Overview

Smart Cash is a web application that allows the registration of income and expense financial transactions. This application was built using the Vite.js framework and utilizes the Firebase Realtime Database to store and retrieve data. Additionally, it incorporates various popular libraries, including Chakra UI, React Hook Form, date-fns, Swiper, and Yup to provide an optimized user experience.

## Features

- Registration of income and expense financial transactions.
- Viewing of previous transactions.
- Validation of input data using Yup.
- Elegant and responsive user interface with Chakra UI.
- Use of Firebase Realtime Database for data storage.
- Easy navigation between transactions with the help of Swiper.

## Prerequisites

Before getting started, make sure you have the following installed in your development environment:

- Node.js (version 14 or higher)
- npm, Yarn or pnpm

## Installation

Follow these steps to set up and run the project on your machine:

1. Clone the repository:

```bash
Copy code
git clone https://github.com/seu-usuario/smart-cash.git
cd smart-cash
```

2. Install the dependencies:
With npm:

```bash
Copy code
npm install
```

With Yarn:

```bash
Copy code
yarn
```

With pnpm:
```bash
Copy code
pnpm install
```

3. Configure your Firebase credentials:

- Create a Firebase project in the Firebase Console.
- Obtain your credentials and configuration information for the Firebase Realtime Database.
- Paste your credentials into the .env.local file at the root of the project, following the values in the .env.example file.

4. Start the development server:

With npm:

```bash
Copy code
npm run dev
```

With Yarn:

```bash
Copy code
yarn dev
```

With pnpm:

```bash
Copy code
pnpm dev
```

5. Access the application in your browser at http://localhost:5173.

## Usage

- Open the application and register your financial transactions.
- View your previous transactions on the main page.
- Experience transaction navigation with Swiper.
- Data will be automatically synchronized with the Firebase Realtime Database.

## Libraries and Frameworks Used

- Vite.js
- Firebase Realtime Database
- Chakra UI
- React Hook Form
- date-fns
- Swiper
- Yup

## Contributing

If you want to contribute to the development of this project, follow these steps:

1. Fork this repository.
2. Create a branch with your changes: git checkout -b my-feature
3. Make the desired changes and commit: git commit -m 'Added a new feature'
4. Push to the main branch: git push origin my-feature
5. Submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for more details.

## Contact
If you have any questions or suggestions, feel free to contact us at [grsv.21@gmail.com](email).

Enjoy using Smart Cash to simplify the recording of your financial transactions and manage your finances with ease!
