import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left_die, setLeftDie] = useState<number>(3);
    const [right_die, setRightDie] = useState<number>(4);
    return (
        <div>
            <p>
                Die 1: <span data-testid="left-die">{left_die}</span>
                Die 2: <span data-testid="right-die">{right_die}</span>
            </p>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>
            {left_die === right_die && left_die === 1 && <div>Lose</div>}
            {left_die === right_die && left_die !== 1 && <div>Win</div>}
        </div>
    );
}
