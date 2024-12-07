import "./globals.css";

export const metadata = {
  title: "NextForm | The form builder",
  description: "Realtime form builder made simplified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
