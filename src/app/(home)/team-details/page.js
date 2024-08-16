import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import TeamPersonalCard from '@/src/components/sections/teams/teamPersonalCard'


const TeamDetails = () => {
    return (
        <main>
            <PageTitle pageName={"Team Details"} breadcrumbLink={"Team Details"} />
            <TeamPersonalCard isDetails={false} />
        </main>
    )
}

export default TeamDetails