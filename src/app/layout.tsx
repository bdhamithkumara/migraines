"use client";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "@/theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthContextProvider } from "./context";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const switchTheme: any = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <body>
            <AuthContextProvider switchTheme={switchTheme}>
              {children}
            </AuthContextProvider>
          </body>
        </LocalizationProvider>
      </ThemeProvider>
    </html>
  );
}
