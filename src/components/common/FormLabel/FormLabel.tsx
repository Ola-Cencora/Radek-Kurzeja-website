type FormLabelProps = {
  id: string;
  label: string;
};
const FormLabel = ({ id, label }: FormLabelProps) => {
  return <label htmlFor={id}>{label}</label>;
};

export default FormLabel;
