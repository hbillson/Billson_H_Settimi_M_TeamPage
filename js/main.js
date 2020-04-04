(() => {
  // variables at the top -> elements on the page we need to work with
  let memButtons = document.querySelectorAll(".memButton"),
      memName = document.querySelector(".memName"),
      memDescription = document.querySelector(".memDescription"),
      memPhoto = document.querySelector(".memPhoto");

    const memData = [

     ["Marisa", `Hi, I'm Marisa Settimi and I am the designer in our Final Integrated Project.
      I'm in my first year of the Interactive Media Development - 3D Visualization program 
      at Fanshawe College. I'm 19 years old and currently live in Hamilton, Ontario.`],
     ["Haley", `Haley's Description.`]

    ]


  function showMember() {
  	debugger;
    memName.textContent = `${memData[this.dataset.offset][0]}`;
    memDescription.textContent = `${memData[this.dataset.offset][1]}`;

    let targetName = this.className.split(" ")[1]; 
    let targetSource = targetName.slice(1);
  	let newSource = `images/${targetName}.jpg`;

  	memPhoto.src = newSource;
  }


  // add a click event to the sigilButtons
  memButtons.forEach(button => button.addEventListener("click", showMember));

})();