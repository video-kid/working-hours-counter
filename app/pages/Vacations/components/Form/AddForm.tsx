import { AddVacationsFormProps, Form } from "./Form";
import { gql, useMutation } from "@apollo/client";

export const ADD_VACATION = gql`
  mutation AddVacations($name: String!, $start: String!, $end: String!) {
    insert_vacations(objects: [{ name: $name, start: $start, end: $end }]) {
      returning {
        name
        start
        end
        id
      }
    }
  }
`;

type AddFormProps = {
  closingHandler: VoidFunction;
};

export const AddForm = ({ closingHandler }: AddFormProps) => {
  const onSubmit = (data: AddVacationsFormProps) => {
    addVacations({ variables: { name: data.name, start: data.start, end: data.end } });
    closingHandler();
  };

  const [addVacations] = useMutation(ADD_VACATION);

  return (
    <>
      <h2>Add Vacations</h2>
      <Form onSubmit={onSubmit} onCancel={closingHandler} />
    </>
  );
};
