export interface InputProps {
  heading: string;
  onChange: (event: {
    target: {
      value: string;
    };
  }) => Promise<void> | void;
  type: 'text' | 'datetime-local';
  placeholder: string;
  initialValue?: string;
}
