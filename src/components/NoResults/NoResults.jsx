import { Msg, GoHomeBtn, GoHomeLink } from './styled';

export function NoResults() {
  return (
    <Msg>
      404 not found
      <br />
      <br />
      That page doesn't exist or is unavailable.
      <GoHomeBtn type="button">
        <GoHomeLink to="/">Go home</GoHomeLink>
      </GoHomeBtn>
    </Msg>
  );
}
