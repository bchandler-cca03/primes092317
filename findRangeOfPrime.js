// find prime numbers
// determine numbers between 1..100 that are divisible 
// by themselves and 1 and print them out

    // for a number i; see if divisible by i % (i-1) != 0
    //  ... i % (i-2) != 0; i % (i-3) != 0; ...
    //
    // at first instance divisbile by a number other
                      // than itself and 1, the logical variable isPrime
                      // is set to false.
console.log("\tPrime \t\tSqrt(+/-)\tCbrt");
console.log("\t-------------------------------------");

loop1:
for (var testNum = 30; testNum>=2; testNum--){
    var limit = testNum;
    var isPrime = true;
    for (var i = limit; i > 0; i--){
        // console.log(testNum, i);
        
                if( (testNum%(i-1)) == 0){
                    // need to test if (i-1) == 1; if so, and isPrime still 
                    if( (i-1) == 1){
                        // if code has been repetively dividing by i-1 and a break has not occured
                        // and the code gets to a divisor of 1; then isPrime is set to true and a
                        // break invoked with a prime number being identified.
                        isPrime = true;
                        var squareRootNum = (Math.round(Math.sqrt(testNum)* 1000))/1000;
                        var cubeRootNum = (Math.round(Math.cbrt(testNum)* 1000))/1000;
                        console.log("\t" + testNum + "\t\t" + squareRootNum + "\t\t" + cubeRootNum);
                        // console.log(isPrime);
                        continue loop1;
                    } else {
                        // console.log(testNum+ " divisbile by  " + (i-1) + " and therefore not Prime");
                        // isPrime = false;
                        // console.log(isPrime);
                        continue loop1;  // continue the 'for-loop' when isPrime is set to TRUE
                                         //   at the label
                    }
                }
            }
}



