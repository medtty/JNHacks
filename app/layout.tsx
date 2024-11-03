import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JNHacks2024',
  description: 'Join us for JNHacks2024, the premier hackathon event where innovation meets creativity.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 w-full">
                <div className="container mx-auto text-center">
                  {children}
                </div>
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
          <div>
            <p className='text-center p-6'>made with ❤️ by <a href="https://github.com/medtty" className='text-slate-400 underline'>medtty</a></p>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}