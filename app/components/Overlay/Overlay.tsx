import styles from "./overlay.module.scss";

type OverlayProps = {
  children: JSX.Element;
};

export const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.overlay}>{children}</div>;
};
