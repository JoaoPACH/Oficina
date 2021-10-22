import GlobalStyle from "./styles/GlobalStyle";
import { Container } from "./styles/index";

import Orders from'./components/Orders/index';

import logo from './images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <src src={logo} alt="ezOrders" />

        <Orders />
      </Container>
    </>
  );
}

export default App;
