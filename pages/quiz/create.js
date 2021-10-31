import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState([])
    const [error, setError] = useState(null)
    const [question, setQuestion] = useState('')

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value)
    }

    const createQuiz = async () => {
        try {
            const response = await axios.post('/api/quiz', {question})
            
            if (response?.data?.success) {
                setQuiz(response.data.data)
            }
            } catch (err) {
                setError(err?.response?.data?.error)
            }
        }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await createQuiz()
    }

    const getQuizes = async () => {
    try {
        const response = await axios.get('/api/quiz')
        
        if (response?.data?.success) {
            setQuiz(response.data.data)
        }
        } catch (err) {
            setError(err?.response?.data?.error)
        }
    }

    useEffect(() => {
        getQuizes()
    }, [])

    if (error) {
        return <p>Noe gikk galt: {error}</p>
    }

    return (
        <div>
            <Head>
                <title>Create Quiz</title>
            </Head>

            <h1>Create Quiz</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Lag nytt spørsmål</label>
                <input id="question" type="text" name="question" value={question} onChange={handleQuestionChange} />
                <button type="submit">Submit</button>
            </form>

            <section>
                {JSON.stringify(quiz)}
            </section>

        </div>
    )
}

export default CreateQuiz