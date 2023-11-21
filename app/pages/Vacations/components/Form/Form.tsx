import Field from '@/app/components/Form/partials/Field';
import TextField from '@/app/components/Form/partials/TextField';
import { useForm } from 'react-hook-form';

export type AddVacationsFormProps = {
  start: string;
  end: string;
  name: string;
  details?: string;
};

const initialFormValues: AddVacationsFormProps = {
  start: '',
  end: '',
  name: '',
};

type FormProps = {
  onSubmit: (data: AddVacationsFormProps) => void;
  onCancel: VoidFunction;
  initialValues?: AddVacationsFormProps;
};

export const Form = ({
  onSubmit,
  onCancel,
  initialValues = initialFormValues,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddVacationsFormProps>({
    defaultValues: initialValues,
    mode: 'all',
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        label='Start date'
        id='start'
        type='date'
        placeholder='start'
        {...register('start', { required: true })}
      />
      <Field
        label='End date'
        id='end'
        type='date'
        placeholder='start'
        {...register('end', { required: true })}
      />
      <Field
        label='Name'
        id='name'
        placeholder='Name'
        {...register('name', { required: true })}
      />
      <TextField
        label='Details'
        id='details'
        placeholder='details'
        {...register('details', {})}
      />

      <button
        type='button'
        aria-label='cancel'
        onClick={onCancel}>
        Cancel
      </button>
      <button
        aria-label='save'
        type='submit'>
        Save
      </button>
    </form>
  );
};
