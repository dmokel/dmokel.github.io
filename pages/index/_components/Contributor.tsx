import { Index } from 'solid-js';
import ProjectItem from './ProjectItem';

export default () => {
  const projectLists = [
    {
      name: 'NFTGo/Gorarity',
      desc: 'An algorithm to calculate NFT rarity(how unique it is), based on Jaccard Distance.',
      link: 'https://github.com/NFTGo/GoRarity',
      logo: 'https://static.nftgo.io/marketplace/NFTGo.svg',
      icon: 'i-fluent-emoji-flat-ghost',
    },
    {
      name: 'photonstorm/Phaser',
      desc: 'Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.',
      link: 'https://github.com/photonstorm/phaser',
      logo: 'https://phaser.io/images/img.png',
      icon: 'i-fluent-emoji-flat-ghost',
    },
    {
      name: 'Tutorial monorepo ',
      desc: 'A typescript monorepo example using pnpm workspace, turbo, prettier, eslint, commitlint, lint-staged, husky and esbuild.',
      link: 'https://github.com/dmokel/tutorial-monorepo',
      logo: '',
      icon: 'i-fluent-emoji-flat-newspaper',
    },
    {
      name: 'Design Patterns',
      desc: 'Practice and Cases on Object Oriented Design Patterns, inspired by 《Game Programming Patterns》. Will continuously record and update.',
      link: 'https://github.com/dmokel/design-patterns',
      logo: '',
      icon: 'i-fluent-emoji-flat-control-knobs',
    },
    {
      name: 'Startup monorepo fastify Phaser colyseus and threejs',
      desc: 'A repository about starting from scratch for monorepo, fastify, Phaser, colyseus, and threejs.',
      link: 'https://github.com/dmokel/startup-monorepo-fastify-phaser-colyseus-threejs',
      logo: '',
      icon: 'i-fluent-emoji-flat-eight-spoked-asterisk',
    },
  ];

  const openLink = () => {
    window.open('https://github.com/dmokel', '_blank');
  };

  return (
    <>
      <h2 class='flex items-center mt-14 mb-4 font-semibold text-2xl'>
        <span flex-1 class='title'>
          Contributor
        </span>
        <div
          onClick={openLink}
          class='op-50 ml-2 hover:op-100 transition-opacity cursor-pointer'
        >
          <div class='m-2 i-ri-arrow-right-up-line'></div>
        </div>
      </h2>
      <div class='grid gap-4 grid-cols-1 sm:grid-cols-2'>
        <Index each={projectLists}>
          {(item) => <ProjectItem data={item()} />}
        </Index>
      </div>
    </>
  );
};
