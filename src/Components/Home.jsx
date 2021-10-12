import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);  // scroll to top of page on route change
  }, []);

  return <h1>Welcome to Home Page</h1>;
};

export default Home;
