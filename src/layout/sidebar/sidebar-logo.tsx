"use client";

import { SIDEBAR_ID } from "@/utils/const";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const SidebarLogo = () => (
  <div className="px-3">
    <div className="flex h-16 items-center">
      <Link
        href="/"
        onClick={() => {
          document.getElementById(SIDEBAR_ID)?.click();
        }}
        className="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 dark:bg-indigo-900/50"
      >
        <LayoutDashboard className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <span className="font-semibold text-gray-900 dark:text-white">NextJS Template</span>
      </Link>
    </div>
  </div>
);

export default SidebarLogo;