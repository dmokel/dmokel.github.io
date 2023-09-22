import { Index, Show } from 'solid-js';

interface SocialProps {
  data: {
    icon: string;
    link: string;
    class: string;
    text?: string;
  };
}

const SocialItem = (props: SocialProps) => {
  const { data } = props;
  return (
    <a
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${data.class} hover:text-white dark:bg-gray-50/10`}
      href={data.link}
      target='_blank'
    >
      <div text-xl>
        <div class={data.icon} />
      </div>
      <Show when={data.text}>
        <div text-sm ml-1>
          {data.text}
        </div>
      </Show>
    </a>
  );
};

export default () => {
  const socialLists = [
    {
      text: 'Github',
      link: 'https://github.com/dmokel',
      icon: 'i-ri-github-fill',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900',
    },
    {
      text: 'Bilibili',
      link: 'https://space.bilibili.com/487361851/channel/series',
      icon: 'i-ri-bilibili-fill',
      class: 'hover:bg-[#F2D7D9]',
    },
    {
      text: '',
      link: 'https://www.youtube.com/@dmokel/playlists',
      icon: 'i-fa-brands-youtube',
      class: 'hover:bg-[#748DA6]',
    },
    {
      text: '',
      link: 'https://twitter.com/DavidMokel',
      icon: 'i-fa-brands-twitter',
      class: 'hover:bg-[#748DA6]',
    },
  ];

  return (
    <div mt-4>
      <Index each={socialLists}>{(item) => <SocialItem data={item()} />}</Index>
    </div>
  );
};
