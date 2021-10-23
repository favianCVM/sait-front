import React from 'react';
import Router from 'config/Router';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 4,
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)    
    });
  }, []);

  return (
    <Router></Router>
  );
}

export default App;