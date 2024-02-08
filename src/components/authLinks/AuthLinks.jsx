"use client";

import Link from "next/link";
import styles from "./authLinks.module.scss";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  const signOutHandler = () => {
    signOut();
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      {status === "unauthenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link className={styles.menu} href="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link className={styles.menu} href="/" onClick={() => setOpen(!open)}>
            About
          </Link>
          <Link className={styles.menu} href="/" onClick={() => setOpen(!open)}>
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={() => setOpen(!open)}>
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/write"
                className={styles.menu}
                onClick={() => setOpen(!open)}
              >
                Write
              </Link>
              <span onClick={signOutHandler}>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
