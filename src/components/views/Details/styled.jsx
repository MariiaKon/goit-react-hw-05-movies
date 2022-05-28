import styled from 'styled-components';

export const Details = styled.div`
  display: block;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 200px auto-fill;
    grid-template-rows: 300px auto-fill;
    grid-column-gap: 20px;
    grid-row-gap: 0;
  }
`;

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  height: 300px;
  width: 200px;
  background-color: #c3c3c3a4;
  margin-bottom: 20px;

  @media screen and (min-width: 500px) {
    grid-area: 1 / 1 / 2 / 2;
    margin: 0;
    margin-bottom: 30px;
  }

  img {
    max-height: 300px;
  }
`;

export const Desription = styled.div`
  @media screen and (min-width: 500px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const MoreInfo = styled.div`
  border-top: 1px solid #8a8a8a;
  border-bottom: 1px solid #8a8a8a;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 500px) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 20px;
  }
`;

export const CastItem = styled.li`
  text-align: center;
  padding: 10px 0;
`;

export const ActorPhoto = styled.div`
  background-color: #c3c3c3a4;
  width: 150px;
  height: 225px;
  margin: 0 auto 10px auto;

  img {
    width: 150px;
  }

  @media screen and (min-width: 500px) {
    width: 120px;
    height: 180px;

    img {
      width: 120px;
    }
  }
`;

export const NoResultsMsg = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 20px 0;
`;
