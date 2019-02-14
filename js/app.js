let form = document.getElementById('generate-names');

    


form.addEventListener('submit',function(){
    let country = document.getElementById('country').value,
        sex = document.getElementById('genre').value,
        amount = document.getElementById('quantity').value;

    if(country && sex && amount) {
      let query = `https://uinames.com/api/?region=${country}&gender=${sex}&amount=${amount}`,
      xhr = new XMLHttpRequest();
      xhr.open('GET', query, true);

      xhr.onload = function(){
        if(this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);
        }
      }
      xhr.send()
    

    }
})