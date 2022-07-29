import React from 'react';
import { GlobalStyles } from './featores/GlobalStyles';
import {ProductsList} from "./featores/productsList/ProductsList";
import {TopBar} from "./featores/topBar/TopBar/index.js";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <TopBar />
            <div>
                <ProductsList/>
            </div>
        </div>
    );
};

export default App;
