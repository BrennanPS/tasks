import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questType, setQuestType] = useState<QuestionType>(
        "short_answer_question",
    );

    return (
        <div>
            <Button
                onClick={() => {
                    questType === "multiple_choice_question" ?
                        setQuestType("short_answer_question")
                    :   setQuestType("multiple_choice_question");
                }}
            >
                Change Type
            </Button>
            {questType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
