// Model
const outputApp = document.getElementById('app');
const personInput = [
    {
        name: 'Olga Marie',
        discord: 'OlgaMarie#1234',
        birthday: '01.12.1967'
    },
    {
        name: 'Martin Hansen',
        discord: 'MartinHansen#4444',
        birthday: '11.07.1989'
    },
    {
        name: 'Fredrik Mon',
        discord: 'MartinHansen#4444',
        birthday: '01.03.2000'
    }
]
const person = {}
const d = new Date();

// View 
updateView()
function updateView() {
    let html = ""

    html += `
    <input type="text" placeholder="Name" onchange="nameInput(this.value)"> <br>
    <input type="text" placeholder="Birth date" onchange="birthDateInput(this.value)"> <br>
    <input type="text" placeholder="Discord ID" onchange="discordInput(this.value)"> <br>
    <button onclick="submitInput()">Submit input</button>
    `

    outputApp.innerHTML = html
}

// Controller
function nameInput(name) {
    person.name = name
    console.log(person)
}


function birthDateInput(birthDate) {
    person.birthday = birthDate
    console.log(person);
}


function discordInput(discordId) {
    person.discordId = discordId
    console.log(person);
}

function submitInput() {
    personInput.push(person);
    console.log(personInput)
}

happyBirthday()
function happyBirthday() {
    for (let i = 0; i < personInput.length; i++) {
        let birthdays = personInput[i].birthday
        let personBirthday = birthdays.substring(0, 5)
        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!

        today = dd + "." + mm

        if (personBirthday === today) {
            console.log("Happy Birthday!")
        }
    }
}








