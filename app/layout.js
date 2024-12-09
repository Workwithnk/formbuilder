'use client';
import "./globals.css";
import { Provider } from 'react-redux'
import { store } from "@/store/store";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
        />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
