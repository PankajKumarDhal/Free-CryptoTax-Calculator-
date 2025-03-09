# Crypto Tax Calculator

This is a **Crypto Tax Calculator** for users in Australia and India. It helps calculate capital gains tax on cryptocurrency transactions and provides various tax-related insights. The project is built with **React.js** and includes multiple components for user interaction.

## Features

- **Crypto Tax Calculation**: Calculate short-term and long-term capital gains tax.
- **Multi-Country Support**: Supports tax calculations for Australia and India.
- **Financial Year Selection**: Users can choose their financial year.
- **User Inputs**:
  - Purchase Price
  - Sale Price
  - Expenses
  - Annual Income
- **Capital Gains & Tax Estimation**: Automatically calculates tax and net capital gains.
- **Responsive Design**: Ensures compatibility across devices.

## Tech Stack

- **Frontend**: React.js (JSX, Components, State Management)
- **Styling**: CSS (Tailwind CSS removed for custom styling)
- **Icons**: React Icons

## Installation

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crypto-tax-calculator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd crypto-tax-calculator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

The application should now be running on `http://localhost:3000/`.

## Project Structure
```
crypto-tax-calculator/
│── src/
│   ├── assets/                # Images and icons
│   ├── components/            # Reusable components
│   │   ├── Header.js          # Navigation bar
│   │   ├── Hero.js            # Main section
│   │   ├── Footer.js          # Footer
│   │   ├── FAQs.js            # FAQ section
│   ├── context/               # React Context API for state management
│   ├── styles/                # CSS files
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point
│── public/
│── package.json               # Project dependencies
│── README.md                  # Project documentation
```

## Usage

1. Enter the required details (purchase price, sale price, expenses, etc.).
2. Choose financial year and country.
3. View the calculated capital gains and tax amount.
4. Explore FAQs and tax-related information.

## Contributing

Contributions are welcome! If you'd like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to your forked repository:
   ```sh
   git push origin feature-branch
   ```
5. Open a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any queries or support, reach out via email or through GitHub Issues.

---

🚀 **Start calculating your crypto taxes today!**
