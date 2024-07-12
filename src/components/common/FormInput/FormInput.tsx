interface FormInputProps {
  id: string;
  type: string;
  name: string;
  required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ id, type, name, required }) => {
  return <input id={id} type={type} name={name} required={required} />;
};

export default FormInput;
