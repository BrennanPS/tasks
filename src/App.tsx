import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddedImage from "./images/cat-in-hat.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Brennan Sieglen Hello World UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>Added a Header</h1>
            Added List:
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src={AddedImage} width="100" height="50" alt="silly_cat" />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "30px",
                                    height: "50px",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "30px",
                                    height: "50px",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
