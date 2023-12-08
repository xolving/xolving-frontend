import { component$ } from "@builder.io/qwik";
import styles from "./title.module.css";

export default component$(() => {
    return (
        <div class={styles.main}>
            <h3 class={styles.title}>개발을 탐구하는<br/>사람들의 커뮤니티</h3>
        </div>
    )
})