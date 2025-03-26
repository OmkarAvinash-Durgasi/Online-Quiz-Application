import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AddQuestion from '../Components/question/AddQuestion'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Quiz from '../Components/quiz/Quiz'
import QuizStepper from '../Components/quiz/QuizStepper'
import QuizResult from '../Components/quiz/QuizResult'
import Navbar from '../Components/layout/NavBar'
import Home from '../Components/Home'
import Admin from '../Components/Admin'
import UpdateQuestion from '../Components/question/UpdateQuestion'
import GetAllQuiz from '../Components/quiz/GetAllQuiz'

function App() {

  return (
    <main className="container mt-5 mb-5">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
				</Routes>
			</Router>
		</main>
  )
}

export default App
