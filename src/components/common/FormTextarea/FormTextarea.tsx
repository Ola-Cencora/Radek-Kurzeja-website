interface FormTextareaProps {
  id: string;
  name: string;
  required: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ id, name, required }) => {
  return <textarea id={id} name={name} required={required} />;
};

export default FormTextarea;
