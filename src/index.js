let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
function toyAdder(){
  //create a div with a class called card
  const div= document.createElement('div')
  div.id="card"
  div.innerText="hello"
  //append the div
  document.getElementById('toy-collection').append(div)
  // h2 of the toys name
  const headingTwo=document.createElement('h2')
  headingTwo.innerText=('PlaceHolder')
  div.append(headingTwo)
  //image of the toy with class toy-avatar
  const image=document.createElement('img')
  image.class="toy-avatar"
  headingTwo.append(image)
  // how many likes the toy has
  //like button for the toy
}
toyAdder()
//each tag needs to be h2 with toys name, image with src of the toy, class name.
//needs to be p tag with how many likes the toy has and a button to add likes