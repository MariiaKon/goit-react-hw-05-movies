import { Msg } from './styled';
import { ButtonComponent } from 'components/CommonComponents/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function NoResults() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Msg>
      404 not found
      <br />
      <br />
      That page doesn't exist or is unavailable.
      <ButtonComponent className="goHome" onClick={handleClick}>
        Go home
      </ButtonComponent>
    </Msg>
  );
}
