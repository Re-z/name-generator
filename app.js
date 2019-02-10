let btn = document.getElementById('button1');

btn.addEventListener('click', function(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'employee.json', true);
    
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
    xhr.send()
})