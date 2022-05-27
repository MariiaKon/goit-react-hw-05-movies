import { Button } from './Button.styled';

export const ButtonComponent = ({ type = 'button', className, children }) => {
  return (
    <Button type={type} className={className}>
      {children}
    </Button>
  );
};
