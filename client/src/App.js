import styled from 'styled-components';
import Start from './components/LandingPage';
import ListContainer from './components/ListContainer';
import { useSelector } from 'react-redux';

const Main = styled.main`
  background: linear-gradient(250deg, rgb(81, 190, 246), rgb(97, 239, 163));
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const Container = styled.div`
  width: 80vw;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  const page = useSelector((state) => state.crud.page);
  return (
    <>
      <Main>
        <Container>{page === 0 ? <Start /> : <ListContainer />}</Container>
      </Main>
    </>
  );
}

export default App;
