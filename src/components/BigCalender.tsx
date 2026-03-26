"use client"
import { useState } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment)

export default function BigCalendar() {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            // Set min/max to 8 AM and 5 PM for the school day
            min={new Date(2026, 0, 1, 8, 0, 0)}
            max={new Date(2026, 0, 1, 17, 0, 0)}
            // Default date to show (August 2026)
            defaultDate={new Date(2026, 7, 10)}
        />
    );
};