import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { routes } from './Routes';

function App() {
    return (
        <div className="html-container">
            <NavBar />
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Page />}
                        />
                    );
                    
                })}
            </Routes>
        </div>
    )
}

export default App
