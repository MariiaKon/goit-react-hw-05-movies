import { Navigation, Link } from './styled';

export function GlobalNav() {
  return (
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Navigation>
  );
}
