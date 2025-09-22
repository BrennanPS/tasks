import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inAttempt, setInAttempt] = useState<boolean>(false);
    const [numAttempts, setNumAttempts] = useState<number>(4);

    return (
        <div>
            <p>
                Remaining Attempts: <span id="numAttempts">{numAttempts}</span>
            </p>
            <div>
                <Button
                    onClick={() => {
                        setInAttempt(true);
                        setNumAttempts(numAttempts - 1);
                    }}
                    disabled={inAttempt || numAttempts <= 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setInAttempt(false);
                    }}
                    disabled={!inAttempt}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setNumAttempts(numAttempts + 1);
                    }}
                    disabled={inAttempt}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
