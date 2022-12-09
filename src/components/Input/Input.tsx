import './Input.css';

interface Props {
  heading: string;
  handleOnChange: (event: {
    target: {
      value: string;
    };
  }) => Promise<void> | void;
  type: 'text' | 'datetime-local';
  placeholder: string;
}

export const Input = ({ heading, handleOnChange, type, placeholder }: Props) => {
  return (
    <span>
      <h3>{heading}</h3>
      <input
        type={type}
        id={heading + type}
        name={heading + type}
        placeholder={placeholder}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={handleOnChange}
      />
    </span>
  );
};
