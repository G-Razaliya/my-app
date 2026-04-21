
import React, { useRef } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Timer from './components/Timer';
import './App.css';
import Counter from './components/Counter';

function App() {
    const inputRef = useRef(null);
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
      <div>
        <div className="app-container">
            <Input ref={inputRef} placeholder="Введите текст..." />
            <Button onClick={handleClear} />
        </div>
        
        <div className="app-container">
          <Counter/>
        </div>

        <div className="app-container">
          <Timer />
        </div>

      </div>
    );
}

export default App;