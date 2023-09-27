let btnLoad = document.getElementById('Load');
btnLoad.onclick = function () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(
      function(result){
        return result.json()
      }
    )
    .then(
      function(j){
        const $ul = document.getElementById('articleList')
        console.log(j)
        for(let i = 0; i < j.length; i++){
          const $li = document.createElement('li')
          $li.innerHTML = j[i].name + " <br>" + j[i].email;
          $ul.appendChild($li)
        }
      }
    )
}