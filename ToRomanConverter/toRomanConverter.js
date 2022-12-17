function toRoman(num){
    const romanList = {
        M: "1000",
        CM: "900",
        D: "500",
        CD: "400",
        C: "100",
        XC: "90",
        L: "50",
        XL: "40",
        X: "10",
        IX: "9",
        V: "5",
        IV: "4",
        I: "1"
    }
    let accumilator = "";
    for(const i in romanList){        
        while(parseInt(romanList[i]) <= num){
            num -= romanList[i];
            accumilator += i; 
        }        
        
    }
    document.querySelector('.rom').innerHTML = accumilator;

    
}
toRoman(954)