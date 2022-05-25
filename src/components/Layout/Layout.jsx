import { GlobalNav } from './Navigation';
import { Main } from './styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>
        <GlobalNav />
      </header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}
