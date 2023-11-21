import { AddVacationsFormProps, Form } from './Form';
import { gql, useMutation } from '@apollo/client';
import { Vacation } from '../../Vacations';
import { dateToDateFieldFormat, epochToDate } from '../../utils';

export const EDIT_VACATION = gql`
  mutation updateVacations(
    $id: Int!
    $name: String!
    $start: String!
    $end: String!
  ) {
    update_vacations(
      where: { id: { _eq: $id } }
      _set: { name: $name, start: $start, end: $end }
    ) {
      affected_rows
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
    editVacation({
      variables: {
        id: vacationDetails.id,
        name: data.name,
        start: data.start,
        end: data.end,
      },
    });
    closingHandler();
  };

  const [editVacation] = useMutation(EDIT_VACATION);
  return (
    <>
      <h2>Edit Vacations</h2>
      <Form
        onSubmit={onSubmit}
        onCancel={closingHandler}
        initialValues={{
          start: dateToDateFieldFormat(epochToDate(vacationDetails.start)),
          end: dateToDateFieldFormat(epochToDate(vacationDetails.end)),
          name: vacationDetails.name,
        }}
      />
    </>
  );
};
