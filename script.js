const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItem = []
getData();

filter.addEventListener('input' , (e) => filterData(e.target.value))


async function getData() {
  const  res = await fetch('https://randomuser.me/api?results= 1000')
  const { results } = await res.json();
  // console.log(data);
  result.innerHTML = ''
  results.forEach(user => {
    const li = document.createElement('li')

    listItem.push(li)

    li.innerHTML = `
    <img src = "${user.picture.large}" alt = "${user.name.first}" "
    <div class = "user-info">
  <h4>${user.name.first}  ${user.name.last} </h4>
  <p>${user.location.city} , ${user.location.country}</p>
    </div>
    `
   result.appendChild(li)
  });

}

function filterData(searchterm) {
  listItem.forEach(item => {
  if(item.innerText.toLowerCase().includes(searchterm.toLowerCase())){
    item.classList.remove('hide');
  }else{
    item.classList.add('hide')
  }
  });
}