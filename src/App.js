import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <hr />
      <Products />
    </ChakraProvider>
  );
}

export default App;
