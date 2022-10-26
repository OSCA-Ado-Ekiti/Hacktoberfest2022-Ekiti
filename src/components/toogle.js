import { useState } from 'react';
import { createContext } from 'react';
import './toggle.css';
import ReactSwitch from 'react-switch';
import { Col, Container, Row } from 'react-bootstrap';

export const ThemeContext = createContext(null);

const Toggle = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Container className="p-5">
                <Row>
                    <Col>
                        <div
                            id={theme}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="switch">
                                <label className="fw-bolder me-2">
                                    {theme === 'light'
                                        ? 'Dark Mode'
                                        : 'Light Mode'}
                                </label>
                                <ReactSwitch
                                    className=""
                                    onChange={toggleTheme}
                                    checked={theme === 'dark'}
                                />
                            </div>

                            <div className="but ms-auto">
                                <button className="changeBackground text-white">
                                    Add Your Project
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ThemeContext.Provider>
    );
};

export default Toggle;
