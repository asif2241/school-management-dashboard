import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

export default function page() {
    return (
        <div>
            {/* left side */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/* user cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type='student' />
                    <UserCard type='parent' />
                    <UserCard type='teacher' />
                    <UserCard type='staff' />
                </div>
                {/* middle side */}
                <div className='flex gap-4 flex-col lg:flex-row'>
                    {/* count chart */}
                    <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChart></CountChart>
                    </div>
                </div>
            </div>
        </div>
    )
}
