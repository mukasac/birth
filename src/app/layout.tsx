import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { 
  Calendar, Gift, Gamepad2, 
  Settings, Home, Bell 
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Birthday Central',
  description: 'Your all-in-one birthday management platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          {/* Sidebar Navigation */}
          <div className="w-64 border-r bg-gray-50 h-screen p-4 fixed">
            <div className="space-y-4">
              {/* Logo/Title */}
              <div className="flex items-center space-x-2">
                <Gift className="w-6 h-6 text-purple-600" />
                <span className="text-xl font-bold">Birthday Central</span>
              </div>

              {/* Main Navigation */}
              <nav className="space-y-2">
                <Link href="/dashboard" 
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-purple-600"
                >
                  <Home className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                
                <Link href="/events" 
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-purple-600"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Events</span>
                </Link>
                
                <Link href="/quizzes" 
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-purple-600"
                >
                  <Gamepad2 className="w-5 h-5" />
                  <span>Quizzes</span>
                </Link>
                
                <Link href="/gifts" 
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-purple-600"
                >
                  <Gift className="w-5 h-5" />
                  <span>Gifts</span>
                </Link>
              </nav>

              {/* User Section */}
              <div className="pt-4 mt-4 border-t">
                {/* Notifications */}
                <Link href="/notifications" 
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-purple-600"
                >
                  <div className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <span>Notifications</span>
                </Link>

                {/* Settings */}
                <Link href="/settings" 
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-purple-600"
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </Link>

                {/* User Profile */}
                <div className="mt-4 p-2 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-600">JD</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-gray-500">john@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 ml-64">
            {/* Top Navigation Bar */}
            <div className="h-16 border-b bg-white px-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium">Welcome back, John!</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </div>
            </div>

            {/* Page Content */}
            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}