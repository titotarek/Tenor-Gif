
let http = new XMLHttpRequest();
var searchInput = document.getElementById('search');
var the_num = document.getElementById('num');

var searchButton = document.getElementById('button');
var resultDiv = document.getElementById('result');
var giveResult = document.getElementById('giveResults');

searchButton.addEventListener('click', function(){
    let searchKeyword = searchInput.value;
        searchNumber = the_num.value;
    if(searchKeyword === ''){
        resultDiv.innerHTML = '';
        var errTag = document.createElement('h3');
        errTag.setAttribute('class','error message');
        errTag.innerText = 'the field is required write as user name first';
        resultDiv.appendChild(errTag);

    } else {
        resultDiv.innerHTML=''
        http.open('get','https://api.tenor.com/v1/search?q='+ searchKeyword+'&key=07R0GS8VU27X&limit='+searchNumber);
        http.responseType='json';
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                let output = http.response.results
                print(output)
            }
        };
            
        http.send();
        

    }
})

function print(arr){
    giveResult.innerHTML = '';
    for (let i=0; i<=arr.length; i++){
        let gifUrl=arr[i].media[0].gif.url
        
        let newGif= document.createElement('img') 
        newGif.setAttribute('src', gifUrl)
        newGif.setAttribute('alt','Loading...')
        newGif.innerHTML = gifUrl;
        giveResult.appendChild(newGif)
    
}}

        
  
    
    
