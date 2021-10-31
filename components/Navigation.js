import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link href="/">Hjem</Link>
                </li>
                <li>
                    <Link href="/quiz">Get Quiz</Link>
                </li>
                <li>
                    <Link href="/quiz/create">Create Quiz</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation