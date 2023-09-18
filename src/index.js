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
  const name=document.getElementById('toyName').value
  //create a div with a class called card
  const div= document.createElement('div')
  div.id="card"
  div.innerText="hello"
  //append the div
  document.getElementById('toy-collection').append(div)
  // h2 of the toys name
  const headingTwo=document.createElement('h2')
  headingTwo.innerText=(name)
  div.append(headingTwo)
  //image of the toy with class toy-avatar
  const image=document.createElement('img')
  image.class="toy-avatar"
  headingTwo.append(image)
  // how many likes the toy has
  const p=document.createElement("p")
  headingTwo.append(p)
  p.innerText= "this toy has X likes"
  //counter
  let counter=0
  p.append(counter)
  //like button for the toy
  const button=document.createElement("BUTTON")
  div.append(button)
  button.innerText="Like"
  //click event listener for like button
  //prevent default
  //gives toy name
  
}
//each tag needs to be h2 with toys name, image with src of the toy, class name.
//needs to be p tag with how many likes the toy has and a button to add likes
addEventListener('submit',eventPreventer)
addEventListener('submit',toyAdder)
function eventPreventer(event){event.preventDefault()

}