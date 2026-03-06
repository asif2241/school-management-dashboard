"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 48,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 58,
        fill: '#C3EBFA',
    },
];



const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* chart */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart
                        responsive
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* bottom */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='font-bold'>Boys (58%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='font-bold'>Girls (42%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;