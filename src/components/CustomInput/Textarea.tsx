export interface TextareaProps {
  id: string;
  className: string;
  boxProps: any;
}

const Textarea = ({ id, className, boxProps }: TextareaProps) => {
  return <textarea id={id} className={className} {...boxProps}></textarea>;
};

export default Textarea;
