// src/App.tsx
import React from 'react';
import '@/styles/theme.css';
import FruitsAutocomplete from '@/features/Fruits';
import SuperHeroesAutocomplete from '@/features/SuperHero';

const App: React.FC = () => {
  return (
    <main className='app'>
      <SuperHeroesAutocomplete />
      <FruitsAutocomplete />
    </main>
  );
};

export default App;
