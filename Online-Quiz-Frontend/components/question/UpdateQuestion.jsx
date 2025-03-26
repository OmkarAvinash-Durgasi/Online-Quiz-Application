import React, { useEffect } from 'react'
import { useState } from 'react'
import { getQuestionById, updateQuestion } from '../../utils/QuizService'
import { Link, useParams } from 'react-router-dom'

function UpdateQuestion() {

    const [question, setQuestion] = useState("")
    const [choices, setChoice] = useState([""])
    const [correctAnswer, setCorrectAnswer] = useState([""])
    const [isLoarding, setIsLoarding] = useState(true)
    
    const { id } = useParams()
    
    useEffect(() => {
        fetchQuestion()
    },[])

    const fetchQuestion = async() => {
        try {
            const questionToUpdate = await getQuestionById(id);
            if (questionToUpdate) {
                setQuestion(questionToUpdate.question)
                setChoice(questionToUpdate.choices)
                setCorrectAnswer(questionToUpdate.correctAnswer)
            }
            setIsLoarding(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleChoiceChange = (index , e) => {
        // setChoice(choices.map((choice , i)=> i === index ? value : choice))
        const updateChoices = [...choices]
        updateChoices[index] = e, target.value
        setChoice(updateChoices)
    }

    const handelCorrectAnswerChnage = (e) => {
        setCorrectAnswer(e.target.value)
    }

    const handleQuestionUpdate = async (e) => {
        e.preventDefault()
        try {
            const updatedQuestion = {
                question,
                choices,
                correctAnswers: correctAnswer.toString().split(",").map((answer)=>answer.trim())
            }
            await updateQuestion(id, updatedQuestion)
            /*Todo: navigate bact to all question page */
            
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoarding) {
        return <p>Loading...</p>
    }

  return (
      <div className="container">
			<h4 className="mt-5" style={{ color: "GrayText" }}>
				Update Quiz Question
			</h4>
			<div className="col-8">
				<form onSubmit={handleQuestionUpdate}>
					<div className="form-group">
						<label className="text-info">Question:</label>
						<textarea
							className="form-control"
							rows={4}
							value={question}
							onChange={handleQuestionChange}></textarea>
					</div>

					<div className="form-group">
						<label className="text-info">Choices:</label>
						{choices.map((choice, index) => (
							<input
								key={index}
								type="text"
								className="form-control mb-4"
								value={choice}
								onChange={(e) => handleChoiceChange(index, e)}
							/>
						))}
					</div>
					<div className="form-group">
						<label className="text-info">Correct Answer(s):</label>
						<input
							type="text"
							className="form-control mb-4"
							value={correctAnswer}
							onChange={handelCorrectAnswerChnage}
						/>
					</div>

					<div className="btn-group">
						<button type="submit" className="btn btn-sm btn-outline-warning">
							Update question
						</button>
						<Link to={"/all-quizzes"} className="btn btn-outline-primary ml-2">
							Back to all questions
						</Link>
					</div>
				</form>
			</div>
		</div>
  )
}

export default UpdateQuestion