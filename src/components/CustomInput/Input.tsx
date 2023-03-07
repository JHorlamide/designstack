import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface CustomInputProps {
  id: string;
  className: string;
  inputProps: any;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: string;
  id: string;
  label?: string;
  required?: boolean;
  type: string;
  value?: string;
  register: UseFormRegister<FieldValues>;
  errors?: any;
  className: string;
  validationSchema?: any;
  parentClassName?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  required,
  type,
  register,
  errors,
  value,
  className,
  inputType,
  parentClassName,
  validationSchema,
  placeholder,
  ...rest
}) => {
  return (
    <div className={parentClassName}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        type={type}
        value={value}
        {...register(id, validationSchema)}
        className={`${errors && errors[id]?.type && "border-red"} ${className}`}
        placeholder={placeholder}
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

export const CustomInput = ({
  id,
  className,
  inputProps,
  ...rest
}: CustomInputProps & React.HTMLProps<HTMLInputElement>) => {
  const ref = inputProps.ref;
  return (
    <input
      id={id}
      className={className}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      ref={ref as any}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

export default Input;
