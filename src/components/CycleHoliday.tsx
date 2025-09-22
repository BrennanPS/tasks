import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "🐇";

export function CycleHoliday(): React.JSX.Element {
    const [holidayType, setHolidayType] = useState<Holiday>("🦃");

    function changeHolidayByName(): void {
        holidayType === "🎄" ? setHolidayType("🐇")
        : holidayType === "🐇" ? setHolidayType("🎆")
        : holidayType === "🎆" ? setHolidayType("🎃")
        : holidayType === "🎃" ? setHolidayType("🦃")
        : setHolidayType("🎄");
    }

    function changeHolidayByDate(): void {
        holidayType === "🐇" ? setHolidayType("🎆")
        : holidayType === "🎆" ? setHolidayType("🎃")
        : holidayType === "🎃" ? setHolidayType("🦃")
        : holidayType === "🦃" ? setHolidayType("🎄")
        : setHolidayType("🐇");
    }

    return (
        <div>
            <p id="holiday-id">Holiday: {holidayType}</p>
            <Button
                onClick={() => {
                    changeHolidayByName();
                }}
            >
                Advance By Alphabet
            </Button>
            <Button
                onClick={() => {
                    changeHolidayByDate();
                }}
            >
                Advance By Year
            </Button>
        </div>
    );
}
