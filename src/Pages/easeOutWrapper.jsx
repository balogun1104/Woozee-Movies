import react from "react";
import styles from "easeOutWrapper.module.css";

const easeOutWrapper = (props) => {
  return (
    <>
      <div className={styles.ease}>{props.children}</div>
    </>
  );
};
export default easeOutWrapper;
