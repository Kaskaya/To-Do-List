/* function myFunction() {
  // Create an "li" node:
  const node = document.createElement("li");

  // Create a text node:

  const textnode = document.getElementById("inp").value;
  const t = document.createTextNode(textnode);

  // Append the text node to the "li" node:
  node.appendChild(t);

  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);
}

document.querySelector("#inp").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myFunction();
  }
}); */

/* function myFunction() {
  const input = document.getElementById("inp");
  const button = document.getElementById("button");
  const child = document.createElement("li");
  const textnode = input.value;
  const t = document.createTextNode(textnode);

  child.appendChild(t);
  document.getElementById("ulist").appendChild(child);
  input.value = "";
} */

/* const button = document.getElementById("button");
const input = document.getElementById("inp");
const element = document.getElementsByName("li");

function myFunction() {
  if (input.value !== "") {
    const node = document.createElement("li");
    const text = document.createTextNode(input.value);
    node.appendChild(text);

    document.getElementById("ulist").appendChild(node);
    input.value = "";
  } else {
    alert("You Died");
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myFunction();
  }
});
button.addEventListener("click", myFunction);

const editButton = document.querySelector(".edit-btn");
const closeButton = document.querySelector(".close-btn"); */

const button = document.getElementById("button");
const input = document.getElementById("inp");

function myFunction() {
  if (input.value !== "") {
    const node = document.createElement("li");
    const text = document.createTextNode(input.value);

    node.addEventListener("click", () => {
      node.classList.toggle("completed");
    });
    node.appendChild(text);
    document.getElementById("ulist").appendChild(node);
    input.value = "";

    function createButton() {
      let b = document.querySelectorAll("li");
      let newButton = document.createElement("button");
      newButton.classList.add("closeButton");
      newButton.appendChild(document.createTextNode("×"));
      for (let i = 0; i < b.length; i++) {
        b[i].appendChild(newButton).addEventListener("click", function () {
          this.parentNode.remove();
        });
      }
    }
    createButton();
  } else {
    alert("You Died");
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myFunction();
  }
});
