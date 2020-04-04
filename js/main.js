(() => {
  // variables at the top -> elements on the page we need to work with
  let memButtons = document.querySelectorAll(".memButton"),
      memName = document.querySelector(".memName"),
      memDescription = document.querySelector(".memDescription"),
      memPhoto = document.querySelector(".memPhoto");

    const memData = [

     ["Marisa", `Marisa's Description.`],
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