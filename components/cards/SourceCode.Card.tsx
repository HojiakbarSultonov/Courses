import { Github } from 'lucide-react'
import React from 'react'
interface SourceCodeProps {
    sourceCode: SourceCodeType
}
function SourceCodeCard({ sourceCode }: SourceCodeProps) {
    return (
        <div className='p-4 bg-gradient-to-br from-card to-primary/50 rounded-lg flex items-center justify-between'>
            <h2 className='text-xl font-space-grotesk font-semibold line-clamp-1 truncate'>
                {sourceCode.title}
            </h2>
            <Github />
        </div>
    )
}

export default SourceCodeCard
