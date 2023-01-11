  const container = document.getElementById('wrapper');
  const people = [
  {
    id: '0',
    title: 'awesome',
    name: 'Victor',
    description: 'amazing!'
  },
  {
    id: '0',
        title: 'good',
    name: 'George',
    description: 'good!'
  },
  {
    id: '0',
        title: 'amazing',
    name: 'francis',
    description: 'nice!'
  }
  ];
  //to calculate the array's length
   const count = people.filter(item => item.id === '0').length;
   console.log(count);
  var index = 0;
 function slide(index) { 
const {title, description, name} = people[index];
//console.log(people[0].title);
container.innerHTML = 
`
<div class="blog">
   <h5>${title}</h5>
  <p>${description}</p>
  <span>${name}</span>
  <button id="prev" onclick="prev()">prev</button>
  <button id="next" onclick="next()">next</button> 
  </div>
`
}
slide(index);
function prev() {
  if (index <= 0) {
    index = people.filter(item => item.id === '0').length-1;
    slide(index);
  } 
  else {
    index--;
    slide(index);
  }
}
function next() {
  if (index >= people.filter(item => item.id === '0').length-1) {
    index = 0;
    slide(index);
  } 
  else {
    index++;
    slide(index);
  }
}
