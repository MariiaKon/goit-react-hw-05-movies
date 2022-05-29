import { Button } from './Button.styled';
import PropTypes from 'prop-types';

export const ButtonComponent = ({
  type = 'button',
  className,
  onClick,
  children,
}) => {
  return (
    <Button type={type} className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};
