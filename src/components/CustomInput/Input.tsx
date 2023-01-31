export interface CustomInputProps {
  id: string;
  className: string;
  inputProps: any;
}

const CustomInput = ({ id, className, inputProps }: CustomInputProps) => {
  return <input id={id} className={className} {...inputProps} />;
};

export default CustomInput;
