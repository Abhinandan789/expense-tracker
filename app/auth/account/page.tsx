// 'use client';
import { AccountSettings } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function AccountSettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Account Settings</h1>
        <AccountSettings
        //@ts-ignore
          appearance={{
            elements: {
              card: "bg-white shadow-none",
              navbar: "bg-gray-100 mb-4 rounded-lg",
              navbarButton: "text-gray-600 hover:text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300",
              navbarButtonActive: "text-blue-600 bg-blue-100",
              sectionHeader: "text-2xl font-semibold mb-4 text-gray-700",
              formFieldLabel: "block text-sm font-medium text-gray-700 mb-1",
              formFieldInput: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mt-4",
              formButtonSecondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 mt-4 ml-2",
            },
          }}
          urls={{
            profile: stackServerApp.urls.accountSettings,
            signOut: stackServerApp.urls.signOut,
          }}
          securitySettings={['profile', 'email', 'password', 'connectedAccounts']}
        />
      </div>
    </div>
  );
}