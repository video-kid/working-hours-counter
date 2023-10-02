import { FunctionComponent, ReactNode } from "react";
import styles from "../table.module.scss";

type WrapperComponent = {
  children: ReactNode;
};

type RecordProps = {
  span?: number;
};

const Wrapper: FunctionComponent<WrapperComponent> = ({ children }) => (
  <table className={styles.wrapper}>{children}</table>
);

const Header: FunctionComponent<WrapperComponent> = ({ children }) => (
  <thead className={styles.header}>
    <tr>{children}</tr>
  </thead>
);

const Heading: FunctionComponent<RecordProps & WrapperComponent> = ({
  children,
  span = 1,
}) => (
  <th colSpan={span} className={`${styles.record}`}>
    {children}
  </th>
);

const Body: FunctionComponent<WrapperComponent> = ({ children }) => (
  <tbody>{children}</tbody>
);

const Row: FunctionComponent<WrapperComponent> = ({ children }) => (
  <tr className={styles.row}>{children}</tr>
);

const Record: FunctionComponent<RecordProps & WrapperComponent> = ({
  children,
  span = 1,
}) => (
  <td colSpan={span} className={styles.record}>
    {children}
  </td>
);

export { Wrapper, Header, Heading, Body, Row, Record };
