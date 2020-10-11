function sprawdzLiczbe(n1, n2){
    let suma = n1 + n2;
    if(n1 == 20 || n2 == 20 || suma <= 20){
        let boolean  = true;
        return boolean;
    }   else    {
        let boolean  = false;
        return boolean ;
    }
}
console.log(sprawdzLiczbe(20, 21));
console.log(sprawdzLiczbe(10, 19));
console.log(sprawdzLiczbe(10, 10));
console.log(sprawdzLiczbe(5, 20));
console.log(sprawdzLiczbe(3, 9));
console.log(sprawdzLiczbe(33, 99));