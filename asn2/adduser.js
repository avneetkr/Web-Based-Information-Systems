var sumOfAges = 0;
//var averageAge = 0;
var users = [];

function User(name, email, age){
	this.name = name;
	this.email = email;
	this.age = age;
}

function addUser(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var age = parseInt(document.getElementById("age").value);

	var newUser = new User(name, email, age);
	users.push(newUser);
	
	sumOfAges += age;
	var averageAge = sumOfAges/(users.length);

	var element = document.getElementById("output");
	var avg = document.getElementById("average_age");

	if (users.length == 1){
		var newheader = document.createElement("p");
		var header_text = document.createTextNode("USERS:");
		newheader.appendChild(header_text);
		element.appendChild(newheader);

		var avg_text = document.createTextNode("The average age of all users is "+ averageAge);
		avg.appendChild(avg_text);
		element.appendChild(avg);

	}
	else {
		avg.textContent = "The average age of all users is "+ averageAge;
	}
	var newElement = document.createElement("OL");
	var outputText = users.length + ". Name: " + newUser["name"] + ", Email: " + newUser["email"] + ", Age: " + newUser["age"];
	var newText = document.createTextNode(outputText);
	newElement.appendChild(newText);

	element.insertBefore(newElement, avg);
}