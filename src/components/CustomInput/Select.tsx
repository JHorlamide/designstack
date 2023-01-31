interface SelectOptionType {
  label?: string;
  value?: string;
  name?: string;
}

export interface SelectProps {
  id: string;
  selectProps: any;
  selectPlaceholder: string;
  // selectLoading?: boolean;
  selectOptions: SelectOptionType[];
  className: string;
}

const Select = ({
  id,
  className,
  selectProps,
  selectOptions,
  selectPlaceholder,
}: SelectProps) => {
  return (
    <select className={className} id={id} {...selectProps}>
      {selectPlaceholder ? (
        <option value={""} disabled>
          {selectPlaceholder}
        </option>
      ) : null}

      {selectOptions?.map((option) => (
        <option
          value={option.value || option.name}
          key={`${option.value || option.name}${Math.random()}`}
        >
          {option.label || option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
