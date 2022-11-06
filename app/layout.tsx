import Header from "components/Header";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>TodoApp</title>
        <meta name="description" content="This is my TodoApp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
