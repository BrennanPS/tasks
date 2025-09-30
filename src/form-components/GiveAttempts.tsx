import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </button>
            <Form.Group controlId="fomGiveAttempts">
                <Form.Label>Attempts Requested: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(
                            isNaN(parseInt(event.target.value)) ? 0 : (
                                parseInt(event.target.value)
                            ),
                        );
                    }}
                />
            </Form.Group>
            <button
                onClick={() => {
                    setAttemptsLeft(
                        (attemptsLeft) => (attemptsLeft += attemptsRequested),
                    );
                }}
            >
                gain
            </button>
            <p>The number of attempts left is {attemptsLeft}</p>
        </div>
    );
}
