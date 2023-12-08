import { component$ } from "@builder.io/qwik";
import imnyang from "/images/imnyang.png";
import kyutorials from "/images/kyutorials.png";
import supernova from "/images/supernova.png";

import styles from "./contributor.module.css";

export default component$(() => {
  return (
    <>
    <h4 class="subtitle">관심을 가져주신 분들</h4>
    <div class={styles}>
      <ul class="contributorList">
        <li class="contributor">
          <img class="contributorImage" src={ kyutorials } width='100' height='100' alt='testA' /><hr/>kyutorials
        </li>
        <li class="contributor">
          <img class="contributorImage" src={ imnyang } width='100' height='100' alt='testA' /><hr/>imnyang
        </li>
        <li class="contributor">
          <img class="contributorImage" src={ supernova } width='100' height='100' alt='testA' /><hr/>supernova
        </li>
      </ul>
    </div>
    </>
  );
});
