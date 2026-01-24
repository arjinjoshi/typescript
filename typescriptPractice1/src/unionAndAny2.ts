
// ************************* Union => can create own datatypes *************************** 

let subs: number | string = 196; // now it can accept number or(|) string 

// So where we need to use this ?
// suppose we want to define our some set of values sothat there won't be any mistakes 

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

// apiRequestStatus = "done"; 
// suppose new developer came and use new message instead from defined set of message...
//   then ts will show error 

let airlineSeat: 'aisle' | 'window' | 'midlle' = 'aisle';
airlineSeat = 'window';

// so in this way we can use "Union"



// **************************** Any ******************************* 

const orders = ['12', '20', '28', '42'];
let currentorder: string | undefined; // here bydefault type of currentorder is any => it doesn't care what you assign to it

for (let order of orders){
    if(order === '28'){
        currentorder = order;
        break;
    }
    currentorder = '19';
}

console.log(currentorder); // here the type of currentorder is string|undefined