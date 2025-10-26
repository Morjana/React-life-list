import styled from 'styled-components';
import { Header } from './components/Header';

const App = () => {
  return (
    <PageStyle>
      <Header />
    </PageStyle>
  );
};

export default App;

const PageStyle = styled.div`
  height: 100%;
  width: 100%;
`;