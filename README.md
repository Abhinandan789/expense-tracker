# Expense Tracker

A simple and efficient expense tracking application built with Next.js, Firebase, and Stack Auth.

## Features

- User authentication
- Add, edit, and delete expenses
- Categorize expenses
- Real-time updates
- Responsive design

## Technologies Used

- Next.js
- Firebase
- Stack Auth [https://www.stack-auth.com/]
- Tailwind CSS
- Material UI
- Framer Motion
- VantaJS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Abhinandan789/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

   # Stack Auth
   NEXT_PUBLIC_STACK_PROJECT_ID=your-project-id
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your-publishable-client-key
   STACK_SECRET_SERVER_KEY=your-secret-server-key
   ```

   Replace the placeholders with your actual Firebase and Stack Auth credentials.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack Auth Setup

1. Run Stack's installation wizard:
   ```
   npx @stackframe/init-stack@latest
   ```

2. Create an account on [Stack Auth dashboard](https://www.stack-auth.com/dashboard) and set up a new project.

3. Add the Stack Auth environment variables to your `.env.local` file as shown in the Installation section.

## Deployment

1. Push your code to a GitHub repository.

2. Deploy on Vercel:
   - Connect your GitHub repository to Vercel.
   - Add the environment variables in the Vercel project settings.
   - Deploy the project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.