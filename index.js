let student = {
    firstName:"",
    lastName:"",
    tuRegNUmber:""
};

let studentList = [];

let first = document.getElementById("firstName").value;
let last = document.getElementById("lastName").value;
let regNumber = document.getElementById("regNumber").value;

function handleSubmit()
{
    student.firstName = first;
    student.lastName = last;
    student.tuRegNUmber = regNumber;
    studentList.push(student);
    setLocalStorageStudent(studentList);
    refreshPage();
}

function setLocalStorageStudent(value)
{
    let tempData = JSON.stringify(value);
    localStorage.setItem("studentList", tempData);
}

function getLocalStorageData()
{
    const studentListData = localStorage.getItem("studentList");

    if(!studentListData)
    {
        return null;
    }

    const studentLists = JSON.parse(studentListData);

    studentList = studentLists;

    displayTableDataForStudent();
}

function displayTableDataForStudent()
{
    studentList.forEach((element) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const lastNameCell = document.createElement("td");
        const tuRegNumberCell = document.createElement("td");

        firstNameCell.textContent = element.firstName;
        lastNameCell.textContent = element.lastName;
        tuRegNumberCell.textContent = element.tuRegNUmber;

        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(tuRegNumberCell);

        document.getElementById("tableBody").appendChild(row);
    });
    
}

function refreshPage()
{
    location.reload();
}

getLocalStorageData();