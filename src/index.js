module.exports = function makeExchange(currency) { // 
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var change = {};


    while(currency > 0){
        if(currency / 50 >= 1){
            change.H = Math.floor(currency / 50);
            currency = Math.floor(currency % 50);
        } 
        else if(currency / 25 >= 1){
            change.Q = Math.floor(currency / 25);
            currency = Math.floor(currency % 25);
        }
        else if(currency / 10 >= 1){
            change.D = Math.floor(currency / 10);
            currency = Math.floor(currency % 10);
        }
        else if(currency / 5 >= 1){
            change.N = Math.floor(currency / 5);
            currency = Math.floor(currency % 5);
        }
        else{     
            change.P = Math.floor(currency / 1);
            currency = Math.floor(currency % 1);
        }
    }

    return change;
    // Return an object containing the minimum number of coins needed to make change
}

