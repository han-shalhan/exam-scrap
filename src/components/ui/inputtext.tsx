import classNames from "classnames";
import { ChangeEventHandler, FC } from "react";

type InputTextProps = {
  id?: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  boxClassName?: string;
};

const InputText: FC<InputTextProps> = ({
  id, label, type, value, onChange, placeholder, required, disabled, className, labelClassName, boxClassName
}) => {
  return <div className={classNames(className)}>
    {label && <label htmlFor={id} className={classNames("inputtext-label", labelClassName)}>
      {label}
    </label>}
    <input
      type={type}
      id={id}
      className={classNames("inputtext-box", boxClassName)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  </div>;
};

export default InputText;