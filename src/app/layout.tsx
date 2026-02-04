// src/app/layout.tsx
import React from 'react';
import './globals.css'; // Atau App.css jika itu style globalmu
import { CartProvider } from '@/context/cart-context'; // Impor Provider kita
// import Navbar from '@/components/Navbar'; // Jika kamu punya Navbar
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <CartProvider> {/* Bungkus semua dengan CartProvider */}
          {/* <Navbar /> */} {/* Navbar bisa ditaruh di sini biar bisa akses info keranjang */}
          <main className="main-content-area"> {/* Kasih class buat styling main content */}
            {children}
          </main>
          {/* Footer bisa di sini juga */}
        </CartProvider>
      </body>
    </html>
  );
}