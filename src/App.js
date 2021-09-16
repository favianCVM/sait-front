import React from 'react';
import { Input } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        hola mundo
        <Input placeholder="Basic usage" />
      </div>
    </ChakraProvider>
  );
}

export default App;