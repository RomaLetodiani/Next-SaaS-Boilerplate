import { SidebarToggle } from "@/layout/sidebar-toggle";
import Link from "next/link";
import { HomeSidebar } from "./home-sidebar";

export const HomeHeader = () => (
  <>
    <HomeSidebar />
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-indigo-600 p-2 dark:bg-indigo-500">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">NextJS Template</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Dashboard
          </Link>
          <SidebarToggle />
        </div>
      </nav>
    </header>
  </>
);