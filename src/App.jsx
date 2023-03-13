import React from 'react';
import GithubUser from './GithubUser';

function App() {
  return (
    <div>
      <h1>FETCH THAT USER</h1>
      <GithubUser username="octocat" />
    </div>
  );
}

export default App;
