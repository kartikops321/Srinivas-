export const metadata = {
  title: "Srinivasa Enterprises",
  description: "Premium import-export website for agricultural products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
