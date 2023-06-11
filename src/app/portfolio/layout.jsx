import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
