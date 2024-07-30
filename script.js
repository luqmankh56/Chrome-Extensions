let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage
renderLeads()
}

inputBtn.addEventListener("click", function() {
    let lead = inputEl.value
    if (!lead.startsWith("http://") && !lead.startsWith("https://")) {
    lead = "http://" + lead
    }
    myLeads.push(lead)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})
deleteBtn.addEventListener("click", function() {
    myLeads = []
    localStorage.removeItem("myLeads")
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

renderLeads()
