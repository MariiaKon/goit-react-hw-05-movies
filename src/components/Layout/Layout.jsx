import { Navigation, Link, Main } from './styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}
