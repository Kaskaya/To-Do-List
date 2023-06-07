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
