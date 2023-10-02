import { useForm } from "react-hook-form";

export type AddVacationsFormProps = {
  start: number | null;
  end: number | null;
  name: string;
};

const initialFormValues: AddVacationsFormProps = {
  start: null,
  end: null,
  name: "",
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
    mode: "all",
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="start"
        {...register("start", { required: true })}
      />
      <input
        type="number"
        placeholder="end"
        {...register("end", { required: true })}
      />
      <input type="text" placeholder="name" {...register("name", {})} />

      <button type="button" aria-label="cancel" onClick={onCancel}>
        Cancel
      </button>
      <button aria-label="save" type="submit">
        Save
      </button>
    </form>
  );
};
