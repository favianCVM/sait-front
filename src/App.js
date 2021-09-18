import React from 'react';
import { Button } from '@chakra-ui/react'
import Test from '@components/Test'
import Componente from '@components/carpeta/Componente';

function App() {
  return (
      <div className="">
        hola mundo
        <Test/>
        <Componente/>
        <Button className="auth-submit-form" > aver </Button>
      </div>
  );
}

export default App;