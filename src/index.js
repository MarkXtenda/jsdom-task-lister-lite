document.addEventListener("DOMContentLoaded", () => {
  
  let textField = document.querySelector("#new-task-description")
  let submit = document.querySelector("#submit")
  let tasks = document.querySelector("#tasks")
  submit.addEventListener("click", (event)=>{
      
      let li = tasks.appendChild(document.createElement("li"))
      li.innerHTML = textField.value
      deleteBtn = document.createElement("button")
      deleteBtn.className = "delete";
      deleteBtn.innerHTML = "x"
      li.appendChild(deleteBtn)

      addEventListener("click", (deleteBtn) => {
        console.log(deleteBtn.target.id)
        if (deleteBtn.target.className === "delete") {
          deleteBtn.target.parentElement.remove()
        }
      })

      event.preventDefault()
  })


});
