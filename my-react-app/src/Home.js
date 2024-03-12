// src/Home.js
import React from 'react';
import { Content } from 'carbon-components-react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <Content>
      <h1>IBM Business Automation Workflow Bootcamp</h1>
      <ul>
        <li>Domain 1</li>
        <li>Domain 2</li>
        <li>Domain 3</li>
        <li>Domain 4</li>
        <li>Domain 5</li>
        <li>Domain 6</li>
        <li>Domain 7</li>
        <li>Domain 8</li>
        <li>Domain 9</li>
        <li>Domain 10</li>
      </ul>
    </Content>
  );
};

export default Home;
