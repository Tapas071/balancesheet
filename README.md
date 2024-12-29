# BalanceSheet

**BalanceSheet** is a comprehensive balance tracker application designed to help users manage their finances efficiently. It offers insights into income, expenses, and spending habits through intuitive charts and categorization. With seamless integration with Google APIs and deployment on Amazon EC2, BalanceSheet ensures a reliable and scalable solution for personal finance management.

---

## ✨ Features

- **Balance Management**: Keep track of your income, expenses, and overall balance.
- **Expense Categorization**: Classify expenses into categories for better tracking.
- **Monthly Insights**: Analyze monthly spending and income trends.
- **Pie Chart Visualization**: Visual representation of spending categories.
- **Google API Integration**: Sync financial data seamlessly using Google APIs.
- **Scalable Deployment**: Hosted on Amazon EC2 for high availability and performance.
- **CI/CD Pipeline**: Automated deployment pipeline for seamless updates.

---

## 🚀 Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/) - For server-side rendering and a robust React framework.
  - [React.js](https://react.dev/) - Core library for building the user interface.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  - [ShadCN](https://shadcn.dev/) - Component library for enhanced UI/UX.

- **Backend**:
  - [Node.js](https://nodejs.org/) - Runtime for building scalable server-side applications.

- **Deployment**:
  - [Amazon EC2](https://aws.amazon.com/ec2/) - Cloud platform for hosting the application.

- **CI/CD**:
  - [GitHub Actions](https://github.com/features/actions) - For maintaining a continuous integration and deployment pipeline.

---

---

### Installation

1. Clone the repository
```bash
git clone https://github.com/Tapas071/balancesheet
cd balancesheet
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Configure your `.env` file
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_uri

# Google API
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

```

5. Run the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser
7. All Scrum link (for core team) : https://www.notion.so/9059103e642a441188b5cc3f86b916dd?v=03d46ebc21044d2c94edb7b2e02a36c0&p=05beaf53e967445dbc87827af5023722&pm=s

## 🔄 CI/CD Pipeline

Our automated pipeline includes:

### Build Stage
- Code compilation
- Dependency installation
- Linting and code quality checks

### Test Stage
- Unit tests execution
- Integration tests
- E2E testing

### Deployment Stage
- Docker image building
- EC2 deployment
- Environment configuration

## 📁 Project Structure

```
balancesheet/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Tailwind & custom styles
│   ├── lib/           # Utility functions
│   ├── api/           # API routes
│   └── config/        # Configuration files
├── public/            # Static assets
├── tests/             # Test files
├── docker/            # Docker configuration
├── .github/           # GitHub Actions workflows
├── package.json
└── README.md
```

## 📊 API Integration

### Google API
The application integrates with Google services for:
- User authentication
- Data backup
- Financial data import

Configuration instructions can be found in `docs/google-api-setup.md`

## 🚀 Deployment

The application is deployed on Amazon EC2:

1. Ensure AWS CLI is configured
```bash
aws configure
```

2. Build the Docker image
```bash
docker build -t balancesheet .
```

3. Push to ECR
```bash
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-aws-account.dkr.ecr.your-region.amazonaws.com
docker tag balancesheet:latest your-aws-account.dkr.ecr.your-region.amazonaws.com/balancesheet:latest
docker push your-aws-account.dkr.ecr.your-region.amazonaws.com/balancesheet:latest
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request
