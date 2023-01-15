import { PropsWithChildren } from "react";
import Providers from "./providers";
import Nav from "components/layout/Nav";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/globals.css";

config.autoAddCss = false;

async function RootLayout({ children }: PropsWithChildren) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <html className="h-full">
      <head>
        <title>TodoApp</title>
        <meta name="description" content="This is my TodoApp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="bg-zinc-700 flex flex-col h-full">
        <Providers session={session}>
          <Nav session={session} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
