'use client';

/* Components */
import { Providers } from '@/lib/providers';
import { Nav } from './components/Nav';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { secrets } from './secrets';
import ModalProvider from './context/modalContext';

/* Instruments */
import './styles/globals.css';

export default function RootLayout(props: React.PropsWithChildren) {
  const client = new ApolloClient({
    headers: {
      'x-hasura-admin-secret': `${secrets.db.vacations}`,
    },
    uri: `${secrets.db.url}`,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Providers>
        <html lang='en'>
          <body>
            <ModalProvider>
              <>
                <Nav />
                <main>{props.children}</main>
              </>
            </ModalProvider>
          </body>
        </html>
      </Providers>
    </ApolloProvider>
  );
}
