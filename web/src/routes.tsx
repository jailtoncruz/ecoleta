import { Route, BrowserRouter, Routes as ReactRoutes } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route element={<Home />} path="/" index={false} />
                <Route element={<CreatePoint />} path="/create-point" />
            </ReactRoutes>
        </BrowserRouter>
    )
}

export default Routes;