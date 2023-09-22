import type { Component } from 'solid-js';

import Contributor from './_components/Contributor';
import Footer from './_components/Footer';
import Hero from './_components/Hero';

const documentProps = {
  title: 'David Mokel',
  description: 'David Mokel (dmokel), Developer.',
};

const Page: Component = () => {
  return (
    <main class='px-6 py-[8vh] max-w-[76ch] mx-auto xl:text-lg dark:prose-invert font-serif'>
      <Hero />
      <Contributor />
      <Footer />
    </main>
  );
};

export { Page, documentProps };
