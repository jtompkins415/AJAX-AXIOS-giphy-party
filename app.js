const imageDiv = document.querySelector('#img-div');
async function searchGiphy (){
    const input = document.querySelector('#gif-search');
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'c7BgjsHQBGAv37ARFIn7N9p7eMzBqX5H', q: input.value}})
     let indexResults = res.data.data.length;
    let rndmIndx = Math.floor(Math.random() * indexResults);
    let img = document.createElement('img')
    img.setAttribute('src', `${res.data.data[rndmIndx].images.original.url}`)
    img.classList.add('giphy-img')
    imageDiv.append(img)
}
    
const searchBtn = document.querySelector('#submit');
searchBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    searchGiphy();
    const input = document.querySelector('#gif-search')
    input.value = '';
}) 

const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    imageDiv.innerHTML='';
})


