
const accordion = document.querySelectorAll(".title");

for (let i = 0; i < accordion.length; i++) {
  const content = accordion[i].nextElementSibling;
  const sectionIndex = i;
  
  accordion[i].addEventListener("click", function() {
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log(this.lastElementChild)
      this.lastElementChild.classList.remove("active");
      this.classList.add("active")
   
    } else {
      for (let j = 0; j < accordion.length; j++) {
        if (j !== sectionIndex) {
          accordion[j].nextElementSibling.style.display = "none";
          accordion[j].lastElementChild.classList.remove("active");
        }
      }
      content.style.display = "block";
      this.classList.add("active");
    }
  });
}