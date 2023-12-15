'use client';

import React from 'react';
import { Project, SectionHeading } from '..';
import { projectsData } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';

/* eslint-disable-next-line */
export interface ProjectsProps {}

export function Projects(props: ProjectsProps) {
    const { ref } = useSectionInView('Projects', 0.5);

    return (
        <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Projects;
