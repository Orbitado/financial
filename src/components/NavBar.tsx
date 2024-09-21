"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
function NavBar() {
  const { data: session } = useSession();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <button onClick={() => signIn()}>Sign In</button>
            <button onClick={() => signOut()}>Sign Out</button>
            <h3>{session?.user?.email}</h3>
            <h3>{session?.user?.name}</h3>
            <Image
              src={session?.user?.image || ""}
              width={50}
              height={50}
              alt={`Profile image of ${session?.user?.name}`}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
