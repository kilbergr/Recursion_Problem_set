//Recusion Problem Set

//Exponent Calculator
//Iteratively:

function power(num, exp){
	var temp = num;
	for (i = 1; i < exp; i++) {
		temp*=num;
	}
	console.log(temp);
};

//Recursively:
function power(num, exp) {
	if (exp === 0){
		return 1;
	}
	else {
		return(num * power(num, exp-1));
	}
};

//Fibonacci index starting with 1
//Iteratively:
function fib(num) {
	var fibNum = 1;
	var prevNum = 1;
	var temp;
	for(var i = 2; i < num; i++){
		temp = fibNum;
		fibNum += prevNum;
		prevNum = temp;
		}
		return fibNum;
};


//Recursively:

function fib(num) {
	//base case
	if (num === 1 || num === 2) {
		return 1;
	}
	else {
		return(fib(num-1) + fib(num-2));
	}
};

//Sum of Range
//Iteratively
function sumOfRange(x){
	var sum=0;
	for(var i = 1; i <= x; i++) {
		sum+=i;
	}
	return sum;
};

//Recursively
function sumOfRange(x){
	if (x === 0) {
		return(0);
	}
	else {
		return(x + sumOfRange(x-1));
	}
}


//99 Bottles of Beer
//Iteratively
function singSong(num){
	for (i = num; i >= 0; i--) {
		if (i > 2){
			console.log(num + " bottles of beer on the wall. " + num + " bottles of beer. Take one down, pass them around, " + (num-1) + " bottles of beer on the wall. ")
		}
		else if (i === 2){
			console.log("2 bottles of beer on the wall. 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall.");
		}
		else if (i === 1){
			console.log("1 bottle of beer on the wall. 1 bottle of beer. Take it down, pass it around, no more bottles of beer on the wall.");
		}
		else if (i === 0){
			console.log("No more bottles of beer on the wall. No more bottles of beer. That's too bad, we're so sad, get off of my porch.");
		}
	}
}

//Recursively
function singSong(num){
	if (num === 2) {
		return("2 bottles of beer on the wall. 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall. 1 bottle of beer on the wall. 1 bottle of beer. Take it down, pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall. No more bottles of beer. That's too bad, we're so sad, get off of my porch.");
	}

	else {
		console.log(num + " bottles of beer on the wall. " + num + " bottles of beer. Take one down, pass them around, " + (num-1) + " bottles of beer on the wall. " + singSong(num-1));
	}
};