var maxProfit = function(prices) {
    let maxprofit=0;
    let minPrice=prices[0];
    for(let sell=1;sell<prices.length;sell++){
        let sellPrice=prices[sell];
        let profit=sellPrice-minPrice;
        maxprofit=Math.max(maxprofit,profit);
        if(sellPrice<minPrice){
            minPrice=sellPrice;
        }
    }
    return maxprofit;
};
let  prices=[7,1,5,3,6,4]
console.log(maxProfit(prices));