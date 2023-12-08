import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Contributor from "~/components/index/contributor/contributor";
import Title from "~/components/index/title/title";


export default component$(() => {
  return (
    <>
      <Title />
      <Contributor />
    </>
  );
});

// REF : https://qwik.builder.io/docs/pages/
export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'xolving - 개발을 탐구하는 사람들의 커뮤니티',
  meta: [
    {
      name: 'description',
      content: 'xolving, 개발을 탐구하는 사람들의 커뮤니티, 디스코드. 개발자 커뮤니티입니다. 다양한 활동을 하려고 노력하며 개발자 생태계에 도움이 되는 프로젝트를 계획하고 있습니다.',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'xolving - 개발을 탐구하는 사람들의 커뮤니티',
    },
    {
      property: 'og:description',
      content: 'xolving, 개발을 탐구하는 사람들의 커뮤니티, 디스코드. 개발자 커뮤니티입니다. 다양한 활동을 하려고 노력하며 개발자 생태계에 도움이 되는 프로젝트를 계획하고 있습니다.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://www.xolving.com',
    },
  ],
};