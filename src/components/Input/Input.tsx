import { InputProps } from 'components/Input/types/InputProps';
import 'components/Input/Input.css';

export const Input = ({ heading, onChange, type, placeholder }: InputProps) => {
  return (
    <span>
      <h3>{heading}</h3>
      <input
        type={type}
        id={heading + type}
        name={heading + type}
        placeholder={placeholder}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={onChange}
        className="styled-input"
      />
    </span>
  );
};
