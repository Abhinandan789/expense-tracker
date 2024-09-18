'use client';
import { SignUp } from "@stackframe/stack";
import React from "react";

export default function CustomSignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back!</h1>
        <SignUp 
        //@ts-ignore
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300",
              formFieldInput: "w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              oauthButton: "w-full mb-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300",
            },
          }}
          

        />
      </div>
    </div>
  );
}