// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "Your personal task organizer powered by mentors.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
