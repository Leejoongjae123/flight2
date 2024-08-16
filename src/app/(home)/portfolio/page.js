import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import ProjectsTab from '@/src/components/sections/projectsTab'



const Portfolio = () => {
    return (
        <main>
            <PageTitle pageName={"Portfolio"} breadcrumbLink={"Portfolio"} />
            <ProjectsTab />
        </main>
    )
}

export default Portfolio