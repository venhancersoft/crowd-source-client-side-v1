import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import reportWebVitals from './reportWebVitals';
import SimpleReactLightbox from 'simple-react-lightbox';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}>
    <SimpleReactLightbox>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </SimpleReactLightbox>
</Provider>);

reportWebVitals();