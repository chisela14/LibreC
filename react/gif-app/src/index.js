import React from 'react';
import {createRoot} from 'react-dom/client';
import {GifApp} from './GifApp';
import './index.css';

const container = document.querySelector('.container');
const root = createRoot(container);
root.render(<GifApp />);