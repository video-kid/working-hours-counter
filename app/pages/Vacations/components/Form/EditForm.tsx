import { AddVacationsFormProps, Form } from "./Form";
import { gql, useMutation } from "@apollo/client";
import { Vacation } from "../../Vacations";

export const EDIT_VACATION = gql`
  mutation EditVacation($name: String!, $start: Integer!, $end: Integer!) {
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

type EditFormProps = {
  closingHandler: VoidFunction;
  vacationDetails: Vacation;
};

export const EditForm = ({
  closingHandler,
  vacationDetails,
}: EditFormProps) => {
  const onSubmit = (data: AddVacationsFormProps) => {
    console.log(data, vacationDetails.id);
    // addUser({ variables: { name: data.name, start: data.start, end: data.end } });
    // closingHandler();
  };

  const [addVacation] = useMutation(EDIT_VACATION);

  return (
    <>
      <h2>Edit Vacations</h2>
      <Form
        onSubmit={onSubmit}
        onCancel={closingHandler}
        initialValues={{
          start: vacationDetails.start,
          end: vacationDetails.end,
          name: vacationDetails.name,
        }}
      />
    </>
  );
};
