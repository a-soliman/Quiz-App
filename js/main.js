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

	} else {
		// add the incorrect class
		document.getElementById('question' + [i]).setAttribute('class', 'incorrect')
		incorrect++
	}
	
}	

}
