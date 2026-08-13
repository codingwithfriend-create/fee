const newSection2 = document.createElement("section");

newSection2.id = "b";
newSection2.textContent = "section 2";

newSection2.classList.add("box");
newSection2.classList.add("box1");
newSection2.classList.add("bg1");

newSection2.style.color = "blue";

newSection2.textContent += " 😊";

document.body.prepend(newSection2);
const newSection3 = document.createElement("section");

newSection3.id = "c";
newSection3.textContent = "section 3";
newSection3.classList.add("box","bg1");
document.body.append(newSection3);
newSection3.classList.remove("bg1");
newSection3.textContent = " Section 3";
newSection3.style.color = "white";
newSection3.style.backgroundColor = "seaGreen";
newSection3.style.width = "31rem";
newSection3.style.height = "3rem";
