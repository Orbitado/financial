"use client";
import { SessionProvider } from "next-auth/react";
function AccountProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AccountProvider;
