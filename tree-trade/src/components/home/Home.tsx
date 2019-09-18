import React from 'react';
import tree from '../../assets/images/tree.jpg';
import { Button } from 'react-bootstrap';
import './Home.css';
import NavBar from '../navbar/NavBar';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <NavBar/>
      <header className="Home-header">
        <img src={tree} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="primary">Click me I do nothing</Button>

      </header>
    </div>
  );
}

export default Home;
