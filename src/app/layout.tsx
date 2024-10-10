import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'react-phone-input-2/lib/style.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Crescendo",
  description: "E-CreScendo Registration Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://scontent.fixc3-1.fna.fbcdn.net/v/t39.30808-1/327161510_597989052337515_7104703843847278293_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=dHTuwaZtTzEQ7kNvgHSbGcH&_nc_ht=scontent.fixc3-1.fna&_nc_gid=Ay4tQaNdccSXm230_xTb7KP&oh=00_AYChHwyWsojnRZP90p3-1s-Iu4vE1pKbyH7sDNdwVK8nhw&oe=66EE6B5D" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${geistSans.variable} bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 ${geistMono.variable} antialiased relative min-h-screen`}>
        <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>
          <svg id = "svg-bg"className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Define your gradients here */}
              <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                <stop offset="0%" stopColor="rgba(30, 41, 59, 1)"></stop>
                <stop offset="100%" stopColor="rgba(30, 41, 59, 0)"></stop>
              </radialGradient>
              <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                <stop offset="0%" stopColor="rgba(51, 65, 85, 1)"></stop>
                <stop offset="100%" stopColor="rgba(51, 65, 85, 0)"></stop>
              </radialGradient>
              <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                <stop offset="0%" stopColor="#1e293b"></stop>
                <stop offset="100%" stopColor="rgba(30, 41, 59, 0)"></stop>
              </radialGradient>
              <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
                <stop offset="0%" stopColor="rgba(15, 23, 42, 1)"></stop>
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0)"></stop>
              </radialGradient>
              <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
                <stop offset="0%" stopColor="rgba(71, 85, 105, 1)"></stop>
                <stop offset="100%" stopColor="rgba(71, 85, 105, 0)"></stop>
              </radialGradient>
            </defs>
            {/* Your animated rectangles here */}
            <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
              <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
              <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"/>
            </rect>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
              <animate attributeName="x" dur="23s" values="0%;-25%;0%" repeatCount="indefinite" />
              <animate attributeName="y" dur="24s" values="25%;-25%;25%" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite"/>
            </rect>
            <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
              <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
              <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
              <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
              <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
              <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
              <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
            </rect>
          </svg>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
