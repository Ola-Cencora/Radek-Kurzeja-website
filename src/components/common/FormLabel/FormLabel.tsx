interface FormLabelProps {
  label: string;
}
const FormLabel: React.FC<FormLabelProps> = ({ label }) => {
  return <label htmlFor={label}>{label}</label>;
};

export default FormLabel;
