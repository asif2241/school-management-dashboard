"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Morning Assembly",
        time: "08:00 AM - 08:30 AM",
        description: "Daily school gathering for announcements, prayers, and the national anthem in the main courtyard.",
    },
    {
        id: 2,
        title: "Parent-Teacher Meeting",
        time: "10:00 AM - 01:00 PM",
        description: "Quarterly discussion regarding student progress, behavior, and academic performance for Grade 10.",
    },
    {
        id: 3,
        title: "Science Fair Preparation",
        time: "02:00 PM - 04:00 PM",
        description: "After-school workshop for students to set up their projects and test equipment in the Physics Lab.",
    },
];

export default function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div
                        className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
