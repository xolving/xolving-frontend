import { component$ } from "@builder.io/qwik";
import Contributor from "~/components/index/contributor/contributor";
import Title from "~/components/index/title/title";


export default component$(() => {
  return (
    <>
      <Title/>
      <Contributor/>
    </>
  );
});