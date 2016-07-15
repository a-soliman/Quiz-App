
// the question object
var questionObj = [
{
	question: "Australia",
	answer: "canberra",
	asked: false
},
{
	question: "Albania",
	answer: "tirana",
	asked: false
},
{
	question: "Argentina",
	answer: "buenos aires",
	asked: false
},
{
	question: "Algeria",
	answer: "algiers",
	asked: false
},
{
	question: "Austria" ,
	answer: "vienna",
	asked: false
},
{
	question: "Azerbaijan" ,
	answer: "baku",
	asked: false
},
{
	question: "Bahrain" ,
	answer: "manama",
	asked: false
},
{
	question: "Bahamas" ,
	answer: "nassau",
	asked: false
},
{
	question: "Bangladesh" ,
	answer: "dhaka",
	asked: false
},
{
	question: "Barbados" ,
	answer: "bridgetown",
	asked: false
},
{
	question: "Belarus" ,
	answer: "minsk",
	asked: false
},
{
	question: "Belgium" ,
	answer: "brussels",
	asked: false
},
{
	question: "Belize" ,
	answer: "belmopan",
	asked: false
},
{
	question: "Benin" ,
	answer: "porto-novo",
	asked: false
},
{
	question: "Brazil" ,
	answer: "brasilia",
	asked: false
},
{
	question: "Bulgaria" ,
	answer: "sofia",
	asked: false
},
{
	question: "Canada" ,
	answer: "ottawa",
	asked: false
},
{
	question: "Chile" ,
	answer: "santiago",
	asked: false
},
{
	question: "China" ,
	answer: "beijing",
	asked: false
},
{
	question: "Cuba" ,
	answer: "havana",
	asked: false
},
{
	question: "Cyprus" ,
	answer: "nicosia",
	asked: false
},
{
	question: "Czech Republic" ,
	answer: "prague",
	asked: false
},
{
	question: "Denmark",
	answer: "copenhagen",
	asked: false
},
{
	question: "Egypt",
	answer: "cairo",
	asked: false
},
{
	question: "El Salvador",
	answer: "san salvador",
	asked: false
},
{
	question: "Finland",
	answer: "helsinki",
	asked: false
},
{
	question: "France",
	answer: "paris",
	asked: false
},
{
	question: "Germany",
	answer: "berlin",
	asked: false
},
{
	question: "Greece",
	answer: "athens",
	asked: false
},
{
	question: "Hungary",
	answer: "budapest",
	asked: false
},
{
	question: "India",
	answer: "new delhi",
	asked: false
},
{
	question: "Iraq",
	answer: "baghdad",
	asked: false
},
{
	question: "Italy",
	answer: "rome",
	asked: false
},
{
	question: "Japan",
	answer: "tokyo",
	asked: false
},
{
	question: "Jordan",
	answer: "amman",
	asked: false
},
{
	question: "Latvia",
	answer: "riga",
	asked: false
},
{
	question: "Netherlands",
	answer: "amsterdam",
	asked: false
},
{
	question: "New Zealand",
	answer: "wellington",
	asked: false
},
{
	question: "North Korea",
	answer: "pyongyang",
	asked: false
},
{
	question: "Norway",
	answer: "oslo",
	asked: false
},
{
	question: "Poland",
	answer: "warsaw",
	asked: false
},
{
	question: "Portugal",
	answer: "lisbon",
	asked: false
},
{
	question: "Qatar",
	answer: "doha",
	asked: false
},
{
	question: "Romania",
	answer: "bucharest",
	asked: false
},
{
	question: "Russia",
	answer: "moscow",
	asked: false
},
{
	question: "South Korea",
	answer: "seoul",
	asked: false
},
{
	question: "Spain",
	answer: "madrid",
	asked: false
},
{
	question: "Sweden",
	answer: "stockholm",
	asked: false
},
{
	question: 'Macedonia',
	answer: 'skopje',
	asked: false
},
{
	question: 'Madagascar',
	answer:	'antananarivo',
	asked: false
},
{
	question: 'Malawi',
	answer:	'lilongwe',
	asked: false
},
{
	question:'Malaysia',
	answer: 'kuala Lumpur',
	asked: false
},
{
	question: 'Maldives',
	answer: 'male',
	asked: false
},
{
	question: 'Mali',
	answer: 'bamako',
	asked: false
},
{
	question: 'Malta',
	answer: 'valletta',
	asked: false
},
{
	question:'Marshall Islands',
	answer:	'majuro',
	asked: false
},
{
	question: 'Mauritania',
	answer: 'nouakchott',
	asked: false
},
{
	question: 'Mauritius',
	answer:	'port Louis',
	asked: false
},
{
	question: 'Mexico',
	answer:	'mexico City',
	asked: false
},
{
	question: 'Micronesia',
	answer:	'palikir',
	asked: false
},
{
	question: 'Moldova',
	answer:	'chisinau',
	asked: false
},
{
	question: 'Monaco',
	answer: 'uonaco',
	asked: false
},
{
	question: 'Mongolia',
	answer:	'ulaanbaatar',
	asked: false
},
{
	question: 'Montenegro',
	answer:	'podgorica',
	asked: false
},
{
	question: 'Morocco',
	answer: 'rabat',
	asked: false
},
{
	question: 'Mozambique',
	answer: 'maputo',
	asked: false
},
{
	question: 'Myanmar (Burma)',
	answer: 'naypyidaw',
	asked: false
}

]

// maximum of 7 question per document
var maxQues = 7 

var rand = Math.floor(Math.random() * maxQues)

	 for(var i=0;i<maxQues;i++){
	 	//sitting the random number
	 	 var rand = Math.floor(Math.random() * questionObj.length)

	 	 //an if statment to insure no repetation
	 	 if(questionObj[rand].asked == true) {
	 	 	var rand = Math.floor(Math.random() * questionObj.length)
	 	 }
	 	// reasign the number "very important" for the answer to match
	 	questionObj[i] = questionObj[rand]
	 	// the question content
	 	 q = "The capital city of " + questionObj[i].question + " ?"
	 	 // the answer of the question
	 	 var answer = questionObj[i].answer
	 	 //sending it to the documet
		 document.getElementById('question' + [i]).textContent = q
		 //test on the console
	 	 console.log(questionObj[i].question + answer + rand)
	 	 //changing the status of the obj for the if statment to work.
	 	 questionObj[i].asked = true

	 }


function calculateAnswer() {
	//the counting of correct, incorrect and empty
	var correct = 0
	var incorrect = 0
	var noAnswer = 0 



	for (var i = 0; i < maxQues; i++) {
		//setting the object answer
		var answer = questionObj[i].answer
		//getting the user's answer
		userAnswer = document.getElementById('answer' + [i]).value.toLowerCase()

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
	var magnificent = "magnificent: you scored " + correct + " / " + maxQues
	var veryWell = "VERY-WELL: you scored " + correct + " / " + maxQues
	var halfWay = "HALFWAY: you scored " + correct + " / " + maxQues
	var fail = "YOU REALLY NEED TO STUDY THIS THING... you scored " + correct + " / " + maxQues

	// the if condition
	if ( correct == maxQues )  {
		statement.textContent = magnificent
	}

	else if (correct >= (maxQues * 80) /100) {
		statement.textContent = veryWell
	}

	else if (correct >= (maxQues * 50) /100) {
		statement.textContent = halfWay
	}

	else if (correct < maxQues / 2 ) {
		statement.textContent = fail
	}

}
