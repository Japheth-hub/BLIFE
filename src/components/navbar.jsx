'use client'
import React from 'react'
import "../app/globals.css";
import Link from 'next/link'
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar({ count }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="w-full flex justify-between items-center py-1 px-4">
      <h1 className="text-3xl">B LIFE</h1>
      <ul className="flex justify-center items-center links">
        <li>Productos</li>
        <li className="mx-4 rounded-3xl bg-orange-400 px-4">Promociones</li>
        <li>Nosotros</li>
      </ul>
      <ul className="flex justify-center items-center">
        <li>
          <img src="/search.png" width="20px" alt="Search" />
        </li>
        <li className="mx-5 iconUser">
          {user ? (
            <Link href="/api/auth/logout">
              <img src={user.picture} width="20px" alt="User" />
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <img src="/user.png" width="20px" alt="User" />
            </Link>
          )}
        </li>
        <li>
          <div>
            <img src="shopping.png" width="20px" alt="Shopping" />
            <span className="count">{count}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}