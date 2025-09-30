import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("yellow");
    const colors = [
        "yellow",
        "blue",
        "orange",
        "red",
        "purple",
        "green",
        "black",
        "brown",
        "white",
    ];
    return (
        <div>
            {colors.map((curColor) => (
                <div
                    key={curColor}
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: curColor,
                        display: "inline-block",
                    }}
                >
                    <Form.Check
                        inline
                        type="radio"
                        name="color"
                        label={curColor}
                        value={curColor}
                        checked={color === curColor}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setColor(event.target.value);
                        }}
                    />
                </div>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                }}
            >
                <p>
                    You have chosen <span>{color}</span>
                </p>
            </div>
        </div>
    );
}
