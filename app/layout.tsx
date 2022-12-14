import Nav from "components/layout/Nav";
import { PropsWithChildren } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/globals.css";

config.autoAddCss = false;

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="h-full">
      <head>
        <title>TodoApp</title>
        <meta name="description" content="This is my TodoApp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="bg-zinc-700 flex flex-col h-full">
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
