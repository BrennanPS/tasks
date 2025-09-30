import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select Answer</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setChoice(event.target.value);
                    }}
                >
                    {options.map((curOption) => (
                        <option key={curOption} value={curOption}>
                            {curOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ?
                <p>✔️</p>
            :   <p>❌</p>}
        </div>
    );
}
