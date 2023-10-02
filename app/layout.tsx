"use client";

/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { secrets } from "./secrets";

/* Instruments */
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  const client = new ApolloClient({
    headers: {
      "x-hasura-admin-secret": `${secrets.db.vacations}`,
    },
    uri: "https://working-hours-conter.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Providers>
        <html lang="en">
          <body>
            <Nav />
            <main>{props.children}</main>
          </body>
        </html>
      </Providers>
    </ApolloProvider>
  );
}
