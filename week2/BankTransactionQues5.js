



const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

console.log(transactions);

// filter() all credit transactions
task1=transactions.filter(t=>t.type==="credit")
console.log("Transactions of type CREDIT :",task1);

//  map() to extract only transaction amounts
task2=transactions.map(t=>t.amount)
console.log("Transaction amounts :",task2)

// reduce() to calculate final account balance
task3=transactions.reduce((acc,tr)=>{
    if(tr.type==="credit"){
        acc=acc+tr.amount
    }
    else if(tr.type==="debit"){
        acc=acc-tr.amount
    }
    return acc;
},0)
console.log("Final Account Balance :",task3)

// find() the first debit transaction
task4=transactions.find(t=>t.type==="debit")
console.log("First debit transaction :",task4);

// findIndex() of transaction with amount 10000

task5=transactions.findIndex(t=>t.amount===10000)
console.log("Index of transaction with 10000 :",task5)