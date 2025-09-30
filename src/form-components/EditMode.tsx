import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode"
                label="edit mode"
                checked={inEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInEdit(event.target.checked);
                }}
            />
            {inEdit && (
                <Form.Group controlId="studentName">
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="is student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />

                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setName(event.target.value);
                        }}
                    />
                </Form.Group>
            )}
            {isStudent ?
                <p>{name} is a student.</p>
            :   <p>{name} is not a student.</p>}
        </div>
    );
}
