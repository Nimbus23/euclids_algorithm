function euclids_algorithm(){
    const num1 = console.prompt();
    const num2 = console.prompt();

    if (num1 === 0) {return num2;}
    if (num2 === 0) {return num1;}

    return euclids_algorithm(num1, num1 % num2);
}