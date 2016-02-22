//problem 1 Multiples of 3 and 5: Brute force
var mults = function(){  
	sum = 0;
	for(var i = 1; i < 1000; i++){
		if(i%3 === 0 || i%5 === 0){
			sum += i;
		}
	}
	console.log(sum);
};

//problem 1 Arithmetic Approach using arithmetic series trick: (1 + 2 + 4 + ....+ N) = N(N + 1)/2 http://www.wikihow.com/Sum-the-Integers-from-1-to-N
var mults2 = function(){
	sum = (5*199*200 + 3*333*334 - 15*66*67)/2;
	console.log(sum);
};

//problem 2 Fibonacci Sequence
var fibSeq = function(){
	var evenSum = 2;
	var lastValue = 1;
	var currentValue = 2;
	var nextValue = 3;
	while(nextValue < 4000000){
		nextValue = lastValue + currentValue;
		lastValue = currentValue;
		currentValue = nextValue;
		
		//console.log(lastValue + ", " + currentValue);
		if(currentValue%2 === 0){
			evenSum += currentValue;
		}
	}
	console.log(evenSum);
}; 

var fibSeq2 = function(){
	var evenSum = 2;
	var f3 = 2;
	var f6 = 0;
	var f = 0;
	while(f < 4000000){
		evenSum += f;
		f = 4*f3 + f6;
		console.log(evenSum);
		f6 = f3;
		f3 = f;
	}
	console.log(evenSum);
}
fibSeq2();

//problem 3 Largest Prime Factor
var primeFactor = function(){
	var largest = 0;
	var num = 600851475143;
	for(var i = 2; i <= num/2; i++){
		var isPrime = true;
		//check if i is a factor of num
		if(num%i === 0 && i > 2){
			//check if factor is prime
			for(var j = 2; j <= i/2; j++){
				if(i%j === 0){
					isPrime = false;
					
				}
			}
			if(isPrime){
				largest = i;
			}
		}
	}
	console.log(largest);
};

//problem 4 Largest Palindrome product
var isPalindrome = function(num){
	var numStr = "" + num;
	var revStr = "";
	for(var i = numStr.length - 1; i >= 0; i--){
		revStr += numStr[i];
	}
	//console.log(revStr);
	if(numStr === revStr){
		return true;
	}
	else{
		return false;
	}
};

var palindromeProduct = function(){
	var largest = 0;
	for(var i = 100; i < 1000; i++){
		for(var j = i; j < 1000; j++){
			var product = i*j;
			if(isPalindrome(product) && product > largest){
				largest = product;
			}
		}
	}
	console.log(largest);
};

//problem 5 Smallest multiple
var smallestMlt = function(){
	var num = 20;
	while(true){
		num++
		var isSmallest = true;
		for(var i = 2; i <= 20; i++){
			if(num%i !== 0){
				isSmallest = false;
				break;
			}
		}
		if(isSmallest === true){
			break;
		}
	};
	console.log(num);
};

//problem 6 Sum of Squares
var squareSums = function(){
	sumOfSquares = 0;
	squareOfSum = 0;
	for (var i = 1; i <= 100; i++){
		squareOfSum += i;
		sumOfSquares += (i*i)
	}
	console.log(Math.pow(squareOfSum, 2) - sumOfSquares); 
}

//problem 7 10,001st prime
//helper function that determines if a number is prime
var isPrime = function(num){
	var prime = true;
	for(var i = 2; i <= Math.sqrt(num); i++){
		if(num%i === 0){
			prime = false;
			break;
		}
	}
	return prime;
}
var prime = function(){
	var count = 2;
	var i = 3;
	var prime = 3;
	while(count <= 10001){
		if(isPrime(i)){
			prime = i;
			count++;
		}
		i++;
	}
	console.log(prime);
}

//problem 8 Largest product in a series.
var largestProduct = function(){
	document.getElementById('prob8nums').addEventListener("change", function(){
	  	var file = this.files[0];
	  	var reader = new FileReader();
	  	reader.onload = function(e){
		    var lines = e.target.result.split('\n');
		    var str = lines.join('');  	
		    var product = 1, max = 0;
		    for(var i = 0; i < str.length - 13; i++){
		    	var product = parseInt(str[i]);
		    	for(var j = i +1; j <= (i + 12); j++){
		    		//console.log(product);
		    		product = product * str[j];

		    			if(product > max){
		    				max = product;
		    			}
		    	}
		    }
	    console.log(max);
		};	
		reader.readAsText(file);	
	});	
};

//largestProduct();



