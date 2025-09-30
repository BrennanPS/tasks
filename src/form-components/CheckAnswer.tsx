import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserAnswer(event.target.value);
                    }}
                />
            </Form.Group>
            <h3>Check Answer</h3>
            <p>{expectedAnswer === userAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
