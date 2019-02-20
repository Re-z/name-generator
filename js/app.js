let form = document.getElementById('generate-names'),
    result = document.getElementById('result')

    


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

            //clear previous result
            let resultChildren = result.querySelectorAll('#result div'),
                resultChildrenArray = Array.from(resultChildren);
            resultChildrenArray.forEach(function(el){
                el.remove()
            });
            
            // show heading (names)
            let resultHeading = document.querySelector('#result .is-hidden');
            if(resultHeading) {
              resultHeading.classList.remove('is-hidden');
            }
            //parse response and print to DOM
            let response = JSON.parse(this.responseText);
            response.forEach(function(el, i){
              let name = `<div class="result__item u-full-width">${i+1}. ${el.name}</div>`
              result.insertAdjacentHTML('beforeEnd', name)
            })
        }
      }
      xhr.send()
    

    }
})