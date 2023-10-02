import styles from "./modal.module.scss";

type ModalProps = {
  closingHandler: () => void;
  children: JSX.Element;
};

export const Modal = ({
  children,
  closingHandler = () => null,
}: ModalProps) => {
  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={() => closingHandler()}>
        x
      </button>
      modal:
      {children}
    </div>
  );
};
