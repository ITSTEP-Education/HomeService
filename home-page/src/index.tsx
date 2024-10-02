import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopSection from './TopSection/TopSection';

const HomePage: React.FC = () => {
  return (
      <div>
          <TopSection /> {}
      </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
