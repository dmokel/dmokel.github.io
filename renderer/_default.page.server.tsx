import { generateHydrationScript, renderToString } from 'solid-js/web';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr';

import { PageContext } from './types';

const passToClient = ['pageProps', 'documentProps'];

const render = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(() => <Page {...pageProps} />);

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'David Mokel';
  const description =
    (documentProps && documentProps.description) ||
    'David Mokel (Mokel), Developer.';

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="author" content="David Mokel" />
        <meta property="og:title" content="David Mokel" />
        <meta property="og:image" content="https://blog.code520.com.cn/medias/logo.png" />
        <meta property="description" content="${description}" />
        <meta property="og:description" content="${description}" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@dmokel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://dmokel.github.io" />
        <link rel="icon" href="/favicon.ico" />
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export { passToClient, render };
