import Nav from "components/layout/Nav";
import Footer from "components/layout/Footer";
import { PropsWithChildren } from "react";
import "styles/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="h-full">
      <head>
        <title>TodoApp</title>
        <meta name="description" content="This is my TodoApp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="bg-zinc-700 flex flex-col h-full lg:border-x lg:border-zinc-500">
        <Nav />
        <div className="max-w-5xl mx-auto h-full w-full overflow-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
