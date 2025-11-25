import Image from "next/image"
import { Card } from "../ui/card"

interface CourseTypeProps {
    course: CourseType
}


function CourseCard({ course }: CourseTypeProps) {
    return (
        <Card className="p-0 rounded-lg bg-card">
            <div className="relative h-52 w-full bg-sidebar rounded-lg">
                <Image src={course.thumbnail} alt={course.title} fill />
            </div>
            <h2 className="px-2 text-xl font-space-grotesk font-bold">

            {course.title}
            </h2>
        </Card>
    )
}

export default CourseCard
