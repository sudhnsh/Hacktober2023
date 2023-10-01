import { useState } from 'react';
import './App.css';
import Student from './Components/Student';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Student />
        </div>
    );
}

export default App;
