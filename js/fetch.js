let form = document.getElementById('generate-names'),
    result = document.getElementById('result'),
    errorBlock = document.getElementById('errorBlock');



form.addEventListener('submit', getApi);


function getApi(){
    let country = document.getElementById('country').value,
        sex = document.getElementById('genre').value,
        amount = document.getElementById('quantity').value;
    // if fields arent empty
    if(country && sex && amount) {
        errorBlock.style.display = 'none';
        
        let query = `https://uinames.com/api/?region=${country}&gender=${sex}&amount=${amount}`;
        
        //send query
        fetch(query)
        .then((response) => {
            //get data and convert it to an array (like json.parse)
            return response.json();
        })
        .then(
            (jsonData) => {
                //clear previous result
                let resultChildren = result.querySelectorAll('#result div'),
                    resultChildrenArray = Array.from(resultChildren);
                
                resultChildrenArray.forEach((el) => { el.remove() });

                // show heading (names)
                let resultHeading = document.querySelector('#result .is-hidden');
                if(resultHeading) {
                    resultHeading.classList.remove('is-hidden');
                }
                //handle data and push it to dom
                jsonData.forEach((el, i) => {
                    let name = `<div class="result__item u-full-width">${i+1}. ${el.name} ${el.surname}</div>`
                    result.insertAdjacentHTML('beforeEnd', name)
                })
            }
        )

    } else {
        errorBlock.style.display = 'block';
      }
}



