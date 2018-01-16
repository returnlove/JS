//  Write a JavaScript program to list the properties of a JavaScript object.

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

for(var key in student)
{	
	// print prop
	console.log(key);
	//print val
	console.log(student[key]);
}

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

console.log("before del");
console.log(student);
console.log("after del");
delete(student.rollno);
console.log(student);

// Write a JavaScript program to get the length of an JavaScript object.

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12,
inner_obj: {'k1': 's'}
 }; 

var i = 0;
for(var key in student)
{
	i += 1;
}
console.log(i);


//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books


var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   
   
for(var i= 0; i < library.length; i++)
{
	console.log(library[i]["author"]);
	console.log(library[i]["title"]);
	console.log(library[i]["readingStatus"]);
	console.log("####");
}

//Write a JavaScript function to print all the methods in an JavaScript object.


var test_obj = {
	test_prop: "hello",
	get_time: function() {
		
		console.log("hello from get time")
	}
	
}

for (var key in test_obj){
	//console.log(typeof(test_obj[key]));
	
	var type_ = typeof(test_obj[key]);
	if(type_ == "function")
	{
		console.log(key);
	}
}

// to-do
// Write a JavaScript function to parse an URL. 

//https://www.w3resource.com/javascript-exercises/javascript-object-exercise-12.php