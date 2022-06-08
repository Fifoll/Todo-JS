const input = document.querySelector("#content");
const button = document.querySelector("#btn");
const container = document.querySelector("#zadania");




function AddToDo() {
        const div = document.createElement("div");
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "usuń";
        deleteButton.classList.add("delete");

        const editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.classList.add("edit");

        const doneButton = document.createElement("button");
        doneButton.textContent = "done";
        doneButton.classList.add("done");

        const inputInToDos = document.createElement("input");
        inputInToDos.setAttribute("type", "text");
        inputInToDos.setAttribute("disabled", true);
        inputInToDos.classList.add("input-zadanie");
        div.append(inputInToDos);
        inputInToDos.value = input.value;
        div.classList.add("zadanie");


        if(input.value != ""){
        container.append(div);
        div.append(deleteButton);
        div.append(editButton);
        div.append(doneButton);
        };
        input.value = "";

        function remove(){
            div.remove();
        }

        function removeToDo(){
            div.classList.add("red");
            doneButton.remove();
            editButton.remove();
            setTimeout(remove, 500);
        };
        deleteButton.addEventListener("click", removeToDo);

        function doneToDo(){
            div.classList.add("skreslone");
            deleteButton.remove();
            editButton.remove();
            doneButton.classList.add("wcisniety");
        }

        doneButton.addEventListener("click", doneToDo);

        function editToDo(){
            if(inputInToDos.getAttribute("disabled", true)){
            
                inputInToDos.removeAttribute("disabled", true);
                editButton.textContent = "done";
                div.style.border = "1px solid #000";
                doneButton.classList.add("ukryc");

            }else{
                inputInToDos.setAttribute("disabled", true);
                editButton.textContent = "edit";
                div.style.border = "none";
                doneButton.classList.remove("ukryc");

            }
    }

        editButton.addEventListener("click", editToDo);
    }

    
    button.addEventListener("click", AddToDo);
    

