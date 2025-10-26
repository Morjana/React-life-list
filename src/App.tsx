import styled from 'styled-components';
import { ResponsiveHeader } from './components/ResponsiveHeader';

const App = () => {
  return (
    <PageStyle>
      <ResponsiveHeader />
    </PageStyle>
  );
};

export default App;

const PageStyle = styled.div`
  height: 100%;
  width: 100%;
`;