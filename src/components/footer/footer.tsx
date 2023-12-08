import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="/" target="_blank" class={styles.anchor}>
          <span>xolving</span>
        </a>
      </div>
    </footer>
  );
});
