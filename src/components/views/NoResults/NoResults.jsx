import { Msg, GoHomeLink } from './styled';
import { ButtonComponent } from 'components/CommonComponents/Button/Button';

export default function NoResults() {
  return (
    <Msg>
      404 not found
      <br />
      <br />
      That page doesn't exist or is unavailable.
      <ButtonComponent type="button" className="goBack">
        <GoHomeLink to="/">Go home</GoHomeLink>
      </ButtonComponent>
    </Msg>
  );
}
