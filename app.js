button.addEventListener('click', function(){
    //init
    let xhr = new XMLHttpRequest();
    //open
    xhr.open('GET', 'data.txt', true)
    // statement
    xhr.onload = function() {  
        if (this.status === 200) {
            alert(1)
            output.innerHTML = this.responseText;
        } else {
            alert( 1111 )
        }
    }
    //send
    xhr.send();
})
