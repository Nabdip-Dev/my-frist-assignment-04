// ===Step-4---faka array===
let interviewList = [];
let rejectedList = [];

// ===Step-1---call count number===

let total = document.getElementById('totalCount')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')
// console.log(total.innerText);

// ===Step-2---call jobs Container===
const allJobCard = document.getElementById('jobsContainer')
// console.log(allJobCard.children.length);

// ===Step-3---push count===

function calculetCount() {
    total.innerText = allJobCard.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculetCount()