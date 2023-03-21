import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SWRConfig } from 'swr';
import { fetcher } from './lib/fetcher';
import { Post } from './components/Post';

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <div className="App">
        <main>
          <Post></Post>
        </main>
      </div>
    </SWRConfig>
  );
}

export default App;
