// ===============================
// Console Banking Application
// ===============================

// -------- Level 2 Bank Object --------

const bank = {
    bankName: "MERN Bank",
    accounts: [],
    nextAccountNumber: 1,
    totalLoans: 0
};


// -------- Create Account --------

const createAccount = (name, type, initialBalance) => {

    if(type === "savings" && initialBalance < 1000){
        console.log("Savings account needs minimum balance 1000");
        return;
    }

    const account = {
        accountNumber: bank.nextAccountNumber++,
        name: name,
        type: type, // savings or current
        balance: initialBalance,
        loan: 0,
        transactions: []
    };

    bank.accounts.push(account);

    console.log("Account Created:", account.accountNumber);
};


// -------- Find Account --------

const findAccount = (accNo) => {
    return bank.accounts.find(acc => acc.accountNumber === accNo);
};


// -------- Deposit --------

const deposit = (accNo, amount) => {

    const acc = findAccount(accNo);

    if(!acc){
        console.log("Account not found");
        return;
    }

    if(amount <= 0){
        console.log("Deposit must be greater than 0");
        return;
    }

    acc.balance += amount;

    acc.transactions.push("Deposited " + amount);

    console.log("Deposited:", amount);
};


// -------- Withdraw --------

const withdraw = (accNo, amount) => {

    const acc = findAccount(accNo);

    if(!acc){
        console.log("Account not found");
        return;
    }

    if(amount > acc.balance){
        console.log("Insufficient Balance");
        return;
    }

    if(acc.type === "savings" && (acc.balance - amount) < 1000){
        console.log("Savings must keep minimum 1000");
        return;
    }

    acc.balance -= amount;

    acc.transactions.push("Withdraw " + amount);

    console.log("Withdrawn:", amount);
};


// -------- Transfer --------

const transfer = (fromAcc, toAcc, amount) => {

    const sender = findAccount(fromAcc);
    const receiver = findAccount(toAcc);

    if(!sender || !receiver){
        console.log("Account not found");
        return;
    }

    if(amount > sender.balance){
        console.log("Insufficient Balance");
        return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    sender.transactions.push("Transferred " + amount + " to " + toAcc);
    receiver.transactions.push("Received " + amount + " from " + fromAcc);

    console.log("Transfer Successful");
};


// -------- Loan Feature --------

const takeLoan = (accNo, amount) => {

    const acc = findAccount(accNo);

    if(!acc){
        console.log("Account not found");
        return;
    }

    const maxLoan = acc.balance * 5;

    if(amount > maxLoan){
        console.log("Loan limit exceeded");
        return;
    }

    acc.loan += amount;
    acc.balance += amount;

    bank.totalLoans += amount;

    acc.transactions.push("Loan Taken " + amount);

    console.log("Loan Approved:", amount);
};


// -------- Check Balance --------

const checkBalance = (accNo) => {

    const acc = findAccount(accNo);

    if(acc){
        console.log("Balance:", acc.balance);
    }
};


// -------- Show All Accounts --------

const showAllAccounts = () => {

    console.table(
        bank.accounts.map(acc => ({
            Account: acc.accountNumber,
            Name: acc.name,
            Type: acc.type,
            Balance: acc.balance,
            Loan: acc.loan
        }))
    );
};


// -------- Bank Summary --------

const bankSummary = () => {

    let totalBalance = 0;

    bank.accounts.forEach(acc => {
        totalBalance += acc.balance;
    });

    console.log("Total Balance:", totalBalance);
    console.log("Total Loans:", bank.totalLoans);
};


// ===============================
// Automatic Execution
// ===============================

console.log("===== MERN BANK SYSTEM =====");

createAccount("Harsh","savings",2000);
createAccount("John","current",500);

deposit(1,500);
withdraw(1,300);

transfer(1,2,400);

takeLoan(2,1000);

checkBalance(1);

showAllAccounts();

bankSummary();