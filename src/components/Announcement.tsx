"use client"
// Mock data for school announcements
const announcements = [
    {
        id: 1,
        title: "Final Exam Schedule Out",
        date: "2025-05-10",
        description: "The official timetable for the Spring final exams is now available on the student portal.",
        variant: "bg-lamaSkyLight",
    },
    {
        id: 2,
        title: "Annual Sports Day",
        date: "2025-05-15",
        description: "Get ready for the inter-house athletics competition! Registration for events ends this Friday.",
        variant: "bg-lamaPurpleLight",
    },
    {
        id: 3,
        title: "Library Maintenance",
        date: "2025-05-12",
        description: "The main library will be closed for system updates from 2:00 PM to 6:00 PM this Sunday.",
        variant: "bg-lamaYellowLight",
    },
];

const Announcements = () => {

    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400 cursor-pointer">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {announcements.map((announcement) => (
                    <div
                        key={announcement.id}
                        className={`${announcement.variant} rounded-md p-4`}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="font-medium">{announcement.title}</h2>
                            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                                {announcement.date}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                            {announcement.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;