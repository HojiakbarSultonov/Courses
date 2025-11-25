import SourceCodeCard from '@/components/cards/SourceCode.Card'
import { sourceCode } from '@/lib/constants'

function SourceCode
    () {
    return (
        <>
            <h1 className='text-2xl font-space-grotesk font-semibold'>Source Codes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {sourceCode.map(sourceCode => (
                    <SourceCodeCard sourceCode={sourceCode} key={sourceCode._id} />
                ))}
            </div>
        </>
    )
}

export default SourceCode

