import React from "react";
import styles from "./Footer.module.css";
function Footer(props) {
  return (
    <footer class={styles.footer + " py-3 my-4"}>
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        {props.items.map((item, index) => (
          <li class="nav-item">
            <a href={"#/"+item} class="nav-link px-2 text-muted">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <p class="text-center text-muted">© 2023 Plane Builder</p>
    </footer>
  );
}

export default Footer;
