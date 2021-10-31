import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

const Quiz = () => {
    const [quiz, setQuiz] = useState([])

    const getQuizes = async () => {
        const response = await axios.get('api/quiz')
        
        if (response?.data?.success) {
            setQuiz(response.data.data)
        }
    }


    useEffect(() => {
        getQuizes()
    }, [])

    return (
        <div>
            <Head>
                <title>Quiz</title>
            </Head>

            <h1>Quiz</h1>

            <section>
                {JSON.stringify(quiz)}
            </section>

        </div>
    )
}

export default Quiz