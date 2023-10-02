import { AddVacationsFormProps, Form } from "./Form";
import { gql, useMutation } from "@apollo/client";

export const ADD_VACATION = gql`
  mutation AddVacation($name: String!, $start: Integer!, $end: Integer!) {
    insert_vacation(objects: [{ name: $name, start: $start, end: $end }]) {
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
    console.log(data, "a");
    // addUser({ variables: { name: data.name, start: data.start, end: data.end } });
    // closingHandler();
  };

  const [addVacation] = useMutation(ADD_VACATION);

  return (
    <>
      <h2>Add Vacations</h2>
      <Form onSubmit={onSubmit} onCancel={closingHandler} />
    </>
  );
};
