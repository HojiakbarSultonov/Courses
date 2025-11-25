import CourseCard from '@/components/cards/Course.card'
import { newProjects } from '@/lib/constants'
import Link from 'next/link'

function Projects() {
    return (
        <>
            <h1 className='text-2xl font-space-grotesk font-semibold'>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {newProjects.map(course => (
                    <Link href={`/courses/${course.slug}`} key={course.slug}>
                        <CourseCard course={course} />
                    </Link>
                ))}
            </div>

        </>
    )
}

export default Projects
