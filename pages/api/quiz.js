const quiz = [
    {
        question: 'Spørsmål 1',
        answers: [
            {
                answer: 'Alternativ 1'
            },
            {
                answer: 'Alternativ 2'
            },
            {
                answer: 'Alternativ 3'
            },
            {
                answer: 'Alternativ 4',
                correct: true
            }

        ]
    },

    {
        question: 'Spørsmål 2',
        answer: [
            {
                answer: 'Alternativ 1',
                correct: true
            },
            {
                answer: 'Alternativ 2'
            },
            {
                answer: 'Alternativ 3'
            },
            {
                answer: 'Alternativ 4'
            }
        ]
    }

]

//Eksempel GET
/*
export default function handler(req, res) {
    res.status(200).json({ success: true, data: quiz})
}
*/

export default function handler (req, res) {
    if (req.method === 'POST') {

        const data = req.body
        
        if(!data?.question){
            res.status(400).json({ success: false, error: 'Fyll ut all info' })
        }
        else {
            quiz.push([data])

        res.status(201).json({ success: true, data: quiz })
        }

    }
    
    else {
        res.status(200).json({ success: true, data: quiz })
    }
}