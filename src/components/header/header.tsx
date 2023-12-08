import { component$ } from "@builder.io/qwik";
import { Logo3D } from "../icons/logo3d";
// import { Logo } from "../icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            {/* <Logo height={50} width={50} /> */}
            <Logo3D height={50} width={50} />
          </a>
        </div>
        <ul>
          <li>
            <a href="/" target="_blank">
              about
            </a>
          </li>
          <li>
            <a href="https://github.com/xolving" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href="https://discord.gg/36tCw3kYuJ" target="_blank">
              discord
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
