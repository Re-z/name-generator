let btn = document.getElementById('button1');
let btn2 = document.getElementById('button2');

btn.addEventListener('click', printSingleJSON)
btn2.addEventListener('click', printMultipleJSON)

function printSingleJSON() {
    //init
    let xhr = new XMLHttpRequest();
    //open
    xhr.open('GET', 'employee.json', true);
    //statement
    xhr.onload = function(){
        if(this.status === 200) {
            let response = JSON.parse(this.responseText),
                output = document.getElementById('employee');
            
            output.innerHTML = `
            <ul>
                <li>id: ${response.id} </li>
                <li>name: ${response.name} </li>
                <li>company: ${response.company} </li>
                <li>job: ${response.job} </li>
            </ul>
            `
        }
    }
    //send
    xhr.send()
}

function printMultipleJSON(){
    let xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'employees.json', true);
    //statement
    xhr.onload = function(){
        if(this.status === 200) {
            let arr = JSON.parse(this.responseText);
            let outputString = '';
            
            arr.forEach(function(el){
                outputString += `
                <ul>
                    <li> id: ${el.id} </li>
                    <li> name: ${el.name} </li>
                    <li> company: ${el.company} </li>
                    <li> job: ${el.job} </li>
                </ul>
                </hr>    
                `                
            })
            employees.innerHTML = outputString;
        }
    }
    
    xhr.send();
}