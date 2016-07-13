// the question object
var questionObj = [
{
	question: "what is the 2 + 2 ?",
	answer: "4"
},
{
	question: "What is the 2+1 ?",
	answer: "3"
},
{
	question: "What is the 2+3",
	answer: "5"
},
{
	question: "What is the 2+4",
	answer: "6"
},
{
	question: "What is the 2+5",
	answer: "7"
},
{
	question: "What is the 2+6",
	answer: "8"
},
{
	question: "What is the 2+7",
	answer: "9"
}
]

// gettin the questions output by id
// var question0 = document.getElementById('question0')
// var question1 = document.getElementById('question1')
// var question2 = document.getElementById('question2')
// var question3 = document.getElementById('question3')
// var question4 = document.getElementById('question4')
// var question5 = document.getElementById('question5')
// var question6 = document.getElementById('question6') 


for (var i = 0; i < questionObj.length; i++) {
	q = questionObj[i].question
	document.getElementById('question' + [i]).textContent = q
}

function calculateAnswer() {
	//the counting of correct, incorrect and empty
	var correct = 0
	var incorrect = 0
	var noAnswer = 0


	for (var i = 0; i < questionObj.length; i++) {
		//setting the object answer
		answer = questionObj[i].answer
		//getting the user's answer
		userAnswer = document.getElementById('answer' + [i]).value


		if (userAnswer == answer) {
			// add the correct class
			document.getElementById('question' + [i]).setAttribute('class', 'correct')
			correct++
			
		} else if (userAnswer == "") {
			// add the empty class
			document.getElementById('question' + [i]).setAttribute('class', 'empty')
			noAnswer++

		} 
		else {
			// add the incorrect class
			document.getElementById('question' + [i]).setAttribute('class', 'incorrect')
			incorrect++
		}	
	}

	// setting the result holder
	var resultCorrect = document.getElementById('resultCorrect')
	var resultIncorrect = document.getElementById('resultIncorrect')
	var resultNoAnswer= document.getElementById('resultNoAnswer')

	//creating h2 for the results of correct, incorrect and empty	
	correctResult = document.createElement('h2')
	incorrectResult = document.createElement('h2')
	noAnswerResult = document.createElement('h2')

	//adding class conected to CSS to change the style of each
	correctResult.className = "answer-correct"
	incorrectResult.className = "answer-incorrect"
	noAnswerResult.className = "answer-didntAnswer"

	//attaching the text and the counting to the output
	correctResult.textContent = 'CORRECT: ' + correct
	incorrectResult.textContent = 'INCORRECT: ' + incorrect
	noAnswerResult.textContent = "DIDN'T Answer: " + noAnswer

	//appending the h2s to the output div
	resultCorrect.appendChild(correctResult)
	resultIncorrect.appendChild(incorrectResult)
	resultNoAnswer.appendChild(noAnswerResult)

//===============	//aditional result =====================//
	// getting the output
	var sideOutput = document.getElementById('resultSide')
	// creating p element
	var statement = document.createElement('p')

	sideOutput.appendChild(statement)

	// assifning the messages 
	var magnificent = "magnificent: you scored " + correct + " / " + questionObj.length
	var veryWell = "VERY-WELL: you scored " + correct + " / " + questionObj.length
	var halfWay = "HALFWAY: you scored " + correct + " / " + questionObj.length
	var fail = "YOU REALLY NEED TO STUDY THIS THING.."

	// the if condition
	if ( correct == questionObj.length )  {
		statement.textContent = magnificent
	}

	else if (correct >= (questionObj.length * 80) /100) {
		statement.textContent = veryWell
	}

	else if (correct >= (questionObj.length * 50) /100) {
		statement.textContent = halfWay
	}

	else if (correct < questionObj.length / 2 ) {
		statement.textContent = fail
	}

}
