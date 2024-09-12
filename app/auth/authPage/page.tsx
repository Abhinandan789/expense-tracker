'use client';
import { AuthPage, useStackApp, useUser } from "@stackframe/stack";
import { useRouter } from 'next/navigation';

export default function CustomAuthPage() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser();

  const handleSignOut = async () => {
    try {
      await user?.signOut();
      router.push('/auth/signIn'); // Redirect to sign in page after sign out
    } catch (error) {
      console.error('Sign out error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <AuthPage
        //@ts-ignore
          appearance={{
            elements: {
              card: "bg-white shadow-none",
              headerTitle: "text-2xl font-bold mb-6 text-center text-gray-800",
              headerSubtitle: "text-sm text-center text-gray-600 mb-6",
              formButtonPrimary: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mt-4",
              formFieldInput: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              footerActionLink: "text-blue-600 hover:text-blue-800",
              signOutButton: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 mr-2",
              goToHomeButton: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300",
            },
          }}
          localization={{
            signOut: {
              headerTitle: 'Welcome Back!',
              headerSubtitle: 'You are already signed in',
              signOutButtonLabel: 'Sign out',
              goToHomeButtonLabel: 'Go to home',
            },
          }}
          onSignOutSuccess={handleSignOut}
        />
      </div>
    </div>
  );
}