import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: string;
  id: string;
  label: string;
  required?: boolean;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors?: any;
  className: string;
  validationSchema?: any;
  parentClassName?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  required,
  type,
  register,
  errors,
  className,
  inputType,
  parentClassName,
  validationSchema,
  ...rest
}) => {
  return (
    <div className={parentClassName}>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        {...register(id, validationSchema)}
        className={`${errors && errors[id]?.type && "border-red"} ${className}`}
        {...rest}
      />
      {errors && errors[id]?.type === "required" && (
        <small className="text-red">{errors[id]?.message}</small>
      )}
      {errors && errors[id]?.type === "minLength" && (
        <small className="text-red">{errors[id]?.message}</small>
      )}
    </div>
  );
};

export default Input