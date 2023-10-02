import * as TablePart from "./partials/TableParts";

export type TableConfigType<T> = {
  content: Array<TableContentType<T>>;
};

type TableContentType<T> = {
  header: string;
  content: (data: T) => JSX.Element | string;
  label?: string | JSX.Element;
};

type TableProps<T> = {
  data: Array<T> | undefined;
  config: TableConfigType<T>;
};

export const Table = <T extends {}>({ data, config }: TableProps<T>) => {
  return (
    <TablePart.Wrapper>
      <TablePart.Header>
        {config.content.map(({ header, label }) => (
          <TablePart.Heading key={header}>{label ?? header}</TablePart.Heading>
        ))}
      </TablePart.Header>
      <TablePart.Body>
        {data?.length ? (
          data.map((rowData, key) => (
            <TablePart.Row key={key}>
              {config.content.map(({ header, content }) => (
                <TablePart.Record key={header}>
                  {content(rowData)}
                </TablePart.Record>
              ))}
            </TablePart.Row>
          ))
        ) : (
          <TablePart.Row>
            <TablePart.Record span={3}>no data</TablePart.Record>
          </TablePart.Row>
        )}
      </TablePart.Body>
    </TablePart.Wrapper>
  );
};
