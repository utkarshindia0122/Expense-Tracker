import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="59bd3b93-742b-427e-b938-58a71286d662" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
document.getElementById('root')
); 