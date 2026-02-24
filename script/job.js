// ===Step-4---faka array===
let interviewList = [];
let rejectedList = [];
let activeTab = 'all';
let currentStatus = 'all'

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
// console.log(mainContainer);

// ---step2.2---Tab Section call----
const tabSection = document.getElementById('tabSection')

// ---step2.4---emptystate msg call----
const emptyState = document.getElementById('emptyState')

// ---step2.3---Tab button call----
const allTabBtn = document.getElementById('all-tab-btn')
const interveiwTabBtn = document.getElementById('interveiw-tab-btn')
const rejectedTabBtn = document.getElementById('rejected-tab-btn')




// ===Step-3---push count===
function calculetCount() {

    total.innerText = allJobCard.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

    if (activeTab === 'interview') {
        tabCount.innerText = interviewList.length
    }
    else if (activeTab === 'rejected') {
        tabCount.innerText = rejectedList.length
    }
    else {
        tabCount.innerText = allJobCard.children.length
    }
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
    currentStatus = id;
    // console.log(selected);

    selected.classList.remove('bg-[#F1F2F4]', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if (id == 'interveiw-tab-btn') {
        allJobCard.classList.add('hidden')
        tabSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-tab-btn') {
        allJobCard.classList.remove('hidden')
        tabSection.classList.add('hidden')
        emptyState.classList.add('hidden')
    } else if (id == 'rejected-tab-btn') {
        allJobCard.classList.add('hidden')
        tabSection.classList.remove('hidden')
        renderRejected()
    }

    // -------------------------------
    if (id == 'interveiw-tab-btn') {
        activeTab = 'interview';
    }
    else if (id == 'rejected-tab-btn') {
        activeTab = 'rejected';
    }
    else {
        activeTab = 'all';
    }
    calculetCount()
}



// ===Step-6---job deatils ===
mainContainer.addEventListener('click', function (event) {

    console.log(event.target.classList.contains('tab-interview-btn'));

    if (event.target.classList.contains('tab-interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText
        const position = parentNode.querySelector('.position').innerText
        const location = parentNode.querySelector('.location').innerText
        const type = parentNode.querySelector('.type').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const description = parentNode.querySelector('.description').innerText

        const interveiwStatus = parentNode.querySelector('.status');
        interveiwStatus.innerText = 'Interview';
        interveiwStatus.classList.remove(
            'bg-[#F1F2F4]',
            'bg-[#EF4444]',
            'bg-[#10B981]',
            'py-1',
            'px-4'
        );
        interveiwStatus.classList.add(
            'border-2',
            'py-1',
            'px-4',
            'bg-[#10B981]',
            'text-white',
            'rounded',
            'border-transparent',
            'hover:border-[#10B981]',
            'hover:text-[#10B981]',
            'hover:bg-transparent'
        );

        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            description,
            status: "Interview"
        }
        // console.log(cardInfo);

        // ---------------------------------------------
        const plantExist = interviewList.find(item => item.companyName == cardInfo.companyName)
        if (!plantExist) {
            interviewList.push(cardInfo)
        }

        // ---------------------------------------------
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)
        if (currentStatus == "rejected-tab-btn") {
            renderRejected()
        }

        calculetCount();
    }
    else if (event.target.classList.contains('tab-rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText
        const position = parentNode.querySelector('.position').innerText
        const location = parentNode.querySelector('.location').innerText
        const type = parentNode.querySelector('.type').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const description = parentNode.querySelector('.description').innerText

        const interveiwStatus = parentNode.querySelector('.status');
        interveiwStatus.innerText = 'Rejected';
        interveiwStatus.classList.remove(
            'bg-[#F1F2F4]',
            'bg-[#10B981]',
            'bg-[#EF4444]',
            'py-1',
            'px-4'
        );
        interveiwStatus.classList.add(
            'border-2',
            'py-1',
            'px-4',
            'bg-[#EF4444]',
            'text-white',
            'rounded',
            'border-transparent',
            'hover:border-[#EF4444]',
            'hover:text-[#EF4444]',
            'hover:bg-transparent'
        );

        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            description,
            status: "Rejected"
        }
        // console.log(cardInfo);

        // ---------------------------------------------
        const plantExist = rejectedList.find(item => item.companyName == cardInfo.companyName)
        if (!plantExist) {
            rejectedList.push(cardInfo)
        }

        // ---------------------------------------------
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)
        if (currentStatus == "interveiw-tab-btn") {
            renderInterview()
        }
        
        calculetCount();
    }
    else if (event.target.closest('.delete-btn')) {
        const card = event.target.closest('.card')
        const companyName = card.querySelector('.companyName').innerText

        interviewList = interviewList.filter(item => item.companyName !== companyName)
        rejectedList = rejectedList.filter(item => item.companyName !== companyName)

        if (activeTab === 'all') {
            card.remove()
        }
        else if (activeTab === 'interview') {
            renderInterview()
        } else if (activeTab === 'rejected') {
            renderRejected()
        }

        calculetCount()
    }
})


// ===Step-7---Interview---===
function renderInterview() {
    tabSection.innerHTML = ''

    if (interviewList.length === 0) {
        emptyState.classList.remove('hidden')
        return
    } else {
        emptyState.classList.add('hidden')
    }

    for (let interveiw of interviewList) {
        console.log(interveiw);
        let div = document.createElement('div')
        div.className = "card flex justify-between bg-white p-4 rounded"
        div.innerHTML = `
        <!-- card main contain -->
                <div>
                    <h1 id="" class="companyName text-xl font-semibold">${interveiw.companyName}</h1>

                    <p id="" class="position text-[#64748B]">${interveiw.position}</p>

                    <div id="" class="flex gap-4 my-4">
                        <p class="location text-[#64748B]"> ${interveiw.location}</p>
                        <p class="type text-[#64748B]">${interveiw.type}</p>
                        <p class="salary text-[#64748B]">${interveiw.salary}</p>
                    </div>

                  <p class="status inline-block border-2 py-1 px-4 bg-[#10B981] text-white rounded border-transparent">${interveiw.status}</p>

                    <p id="" class="description my-2"> ${interveiw.description}</p>

                    <div class="flex gap-3 my-2">
                        <button id="btnInterveiw"
                            class="tab-interview-btn border-2 py-1 px-4 border-[#10B981] text-[#10B981] rounded  hover:bg-[#10B981] hover:text-white"
                            data-tab="Interview">Interview</button>

                        <button id="btnRejected"
                            class="tab-rejected-btn border-2 py-1 px-4 border-[#EF4444] text-[#EF4444] rounded hover:bg-[#EF4444] hover:text-white"
                            data-tab="Rejected">Rejected</button>
                    </div>
                </div>

                <!-- card delete button -->
                <div id="btnDelete" class="delete-btn">
                    <i
                        class="fa-solid fa-trash mr-2  border-2 border-[##64748B] text-[#64748B] p-2 rounded-full hover:border-red-600 hover:text-red-600"></i>
                </div>
        `
        tabSection.appendChild(div)
    }
}
// ===Step-8---Rejected---===
function renderRejected() {
    tabSection.innerHTML = ''

    if (rejectedList.length === 0) {
        emptyState.classList.remove('hidden')
        return
    } else {
        emptyState.classList.add('hidden')
    }

    for (let rejected of rejectedList) {
        console.log(rejected);
        let div = document.createElement('div')
        div.className = "card flex justify-between bg-white p-4 rounded"
        div.innerHTML = `
        <!-- card main contain -->
                <div>
                    <h1 id="" class="companyName text-xl font-semibold">${rejected.companyName}</h1>

                    <p id="" class="position text-[#64748B]">${rejected.position}</p>

                    <div id="" class="flex gap-4 my-4">
                        <p class="location text-[#64748B]"> ${rejected.location}</p>
                        <p class="type text-[#64748B]">${rejected.type}</p>
                        <p class="salary text-[#64748B]">${rejected.salary}</p>
                    </div>

                  <p class="status inline-block border-2 py-1 px-4 bg-[#EF4444] text-white rounded border-transparent">${rejected.status}</p>

                    <p id="" class="description my-2"> ${rejected.description}</p>

                    <div class="flex gap-3 my-2">
                        <button id="btnInterveiw"
                            class="tab-interview-btn border-2 py-1 px-4 border-[#10B981] text-[#10B981] rounded  hover:bg-[#10B981] hover:text-white"
                            data-tab="Interview">Interview</button>

                        <button id="btnRejected"
                            class="tab-rejected-btn border-2 py-1 px-4 border-[#EF4444] text-[#EF4444] rounded hover:bg-[#EF4444] hover:text-white"
                            data-tab="Rejected">Rejected</button>
                    </div>
                </div>

                <!-- card delete button -->
                <div id="btnDelete" class="delete-btn">
                    <i
                        class="fa-solid fa-trash mr-2  border-2 border-[##64748B] text-[#64748B] p-2 rounded-full hover:border-red-600 hover:text-red-600"></i>
                </div>
        `
        tabSection.appendChild(div)
    }
}