// ===Step-4---faka array===
let interviewList = [];
let rejectedList = [];



// ===Step-1---call count number===
let total = document.getElementById('totalCount')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')
let tabCount = document.getElementById('tabCount')

// console.log(total.innerText);



// ===Step-2---call jobs Container===
const allJobCard = document.getElementById('jobsContainer')
// console.log(allJobCard.children.length);

// ---step2.1---call main section----
const mainContainer = document.querySelector('main')
console.log(mainContainer);

// ---step2.2---Tab button call----
const allTabBtn = document.getElementById('all-tab-btn')
const interveiwTabBtn = document.getElementById('interveiw-tab-btn')
const rejectedTabBtn = document.getElementById('rejected-tab-btn')




// ===Step-3---push count===
function calculetCount() {
    total.innerText = allJobCard.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
    tabCount.innerText = allJobCard.children.length
}
calculetCount()



// ===Step-5---Tab button ar kaj===
function toggleStyle(id) {
    // step-5.1 removed color
    allTabBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interveiwTabBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedTabBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    // step-5.2 add color
    allTabBtn.classList.add('bg-[#F1F2F4]', 'text-black')
    interveiwTabBtn.classList.add('bg-[#F1F2F4]', 'text-black')
    rejectedTabBtn.classList.add('bg-[#F1F2F4]', 'text-black')

    // step-5.3 selected color add
    const selected = document.getElementById(id)
    // console.log(selected);
    selected.classList.remove('bg-[#F1F2F4]', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white')
}