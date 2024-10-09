

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myday")?.click();
});

// right click menu

document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 

 function hideMenu() { 
     document.getElementById("contextMenu") .style.display = "none" 
 } 

 function rightClick(e) { 
     e.preventDefault(); 

    
         let menu = document.getElementById("contextMenu")      
         let rightClickMenu = document.getElementById("rightClickMenu")      
         menu.style.display = 'block'; 
         rightClickMenu.style.display = 'table-cell'; 
         menu.style.left = e.pageX + "px"; 
         menu.style.top = e.pageY + "px"; 
     
     
 } 





let numberOfNewLi = 0;
let clickedElement = null;
let rightClickDetected = false 
let DeleteList = document.getElementById("DeleteList");
function addItem() {
  // Select all <li> elements in the document
  const allLiElements = document.querySelectorAll("li");

  // Get the count of <li> elements
  const numberOfLi = allLiElements.length;
  const ul = document.querySelector("ul");

  // Increment the numberOfNewLi variable
  numberOfNewLi++;

  // Create a new <li> element
  const newLi = document.createElement("li");
  newLi.classList.add("list"); // Add the 'list' class to the new item
  newLi.innerHTML = `<span class="icon-text"><i class="fa-solid fa-bars"></i><span class="text">list ${numberOfNewLi}</span></span>`;

  // Insert the new <li> element before the "New list" item
  lists[newLi.textContent.trim()] = {
    backgroundColor : "#faebd7ba",
    tasks : {

    }

  };
  let addItemLi = document.getElementById("addItem");
  ul.insertBefore(newLi, addItemLi);

  newLi.addEventListener("click", function () {
    clickedElement = this;
    document.getElementById("iconTitle").className = clickedElement.querySelector("i").className;
    document.querySelector("h1").textContent = clickedElement.textContent;
    document.querySelector("body").style.backgroundColor = "#faebd7ba";
    // document.addEventListener("DOMContentLoaded",function(){
      tasksContainer.innerHTML = ""
      for(let key in lists[clickedElement.textContent.trim()].tasks){
        let newTask = document.createElement('div');
          newTask.className = 'task';
          RadioBtnIdNumber++
          let taskName =lists[clickedElement.textContent.trim()].tasks[key]
  
          newTask.innerHTML = `
              <input id="btn${RadioBtnIdNumber}" type="radio" name="">
              <span>${taskName.name}</span>
              <i class="fa-regular fa-star"></i>
          `;
          if(taskName.status == true){
            newTask.style.backgroundColor = "#c3b2b25c"
            newTask.querySelector("span").style.textDecoration ="line-through" ;
            newTask.querySelector("i").style.color ="white" ;
            newTask.querySelector("input").checked = true
          }else{
            newTask.style.backgroundColor = ""
            newTask.querySelector("span").style.textDecoration ="none" ;
            newTask.querySelector("i").style.color ="gray" ;
            newTask.querySelector("input").checked = false
          }
        tasksContainer.appendChild(newTask)
        whenRadioBtnTaskClicked()
      }
    // })
   

    
    console.log(clickedElement);
  });

  // delet list when right click on it and click delete on contextmenu

  document.querySelectorAll(".list").forEach(function (element) {
    element.addEventListener("contextmenu", function () {
      clickedElement = this;
      
      rightClickDetected = true
     
  
    })})
  
    DeleteList.addEventListener("click",function(){
        if(rightClickDetected){
          if(clickedElement.classList.contains("PrimaryList")){
            alert("this list cannot be deleted")
          }else{
            clickedElement.remove()
            rightClickDetected = false;
          }
        
        }  
    })
  

}
function whenRadioBtnTaskClicked(){
  // when radio btn task clicked
  const radioButtons = document.querySelectorAll("#tasks .task input[type='radio']");
  radioButtons.forEach(function(element) {
    let clickCounter = 0;
  element.addEventListener("click", function() {
      console.log('Radio button clicked:', this); // This should log the clicked radio button
      console.log(this.parentNode)
      
      if(clickCounter % 2 ==0 ){
        
        console.log(`hhhhhhhh :  ${this.parentNode.id}`)
          lists[clickedElement.textContent.trim()].tasks[this.parentNode.id].status = true
        
     
      
        this.parentNode.style.backgroundColor = "#c3b2b25c"
        this.parentNode.querySelector("span").style.textDecoration ="line-through" ;
        this.parentNode.querySelector("i").style.color ="white" ;

      }else {
     
         
        console.log(`hhhhhhhh :  ${this.parentNode.id}`)

        lists[clickedElement.textContent.trim()].tasks[this.parentNode.id].status = false
                             
         this.parentNode.style.backgroundColor = ""
        this.parentNode.querySelector("span").style.textDecoration ="none" ;
        this.parentNode.querySelector("i").style.color ="gray" ;
        this.checked = false
      }
      clickCounter++

     })})
}


// Add event listener to the "New list" button
let addItemBtn = document.getElementById("addItem");
let seletedPage
addItemBtn.addEventListener("click", addItem);
// write the title list depended on the list that clicked
document.querySelectorAll(".list").forEach(function (element) {
  element.addEventListener("click", function () {
    clickedElement = this;
     seletedPage = clickedElement
    clickedElement.textContent.trim();
    document.getElementById("iconTitle").className = clickedElement.querySelector("i").className;
    
    document.querySelector("h1").textContent = clickedElement.textContent.trim();

    switch (clickedElement.textContent.trim()) {
      case "My day":
        tasksContainer.innerHTML = ""
        for(let key in lists["My day"].tasks){
          let newTask = document.createElement('div');
            newTask.className = 'task';
            
            let taskName =lists["My day"].tasks[key]

            newTask.id = taskName.id;

            newTask.innerHTML = `
                <input id="btn${taskName.id}" type="radio" name="">
                <span>${taskName.name}</span>
                <i class="fa-regular fa-star"></i>
            `;
            if(taskName.status == true){
              newTask.style.backgroundColor = "#c3b2b25c"
              newTask.querySelector("span").style.textDecoration ="line-through" ;
              newTask.querySelector("i").style.color ="white" ;
              newTask.querySelector("input").checked = true
            }else{
              newTask.style.backgroundColor = ""
              newTask.querySelector("span").style.textDecoration ="none" ;
              newTask.querySelector("i").style.color ="gray" ;
              newTask.querySelector("input").checked = false
            }
          tasksContainer.appendChild(newTask)
          whenRadioBtnTaskClicked()
        }
        console.log(` ${seletedPage}`)
        
        console.log(`${clickedElement}`);
        console.log(` this is from object ${lists[clickedElement]}`);

        document.querySelector("body").style.backgroundColor = "aliceblue";
        break;
      case "Important":
        tasksContainer.innerHTML = ""
        for(let key in lists["Important"].tasks){
          let newTask = document.createElement('div');
            newTask.className = 'task';
            let taskName =lists["Important"].tasks[key]
            newTask.id = taskName.id;

            newTask.innerHTML = `
                <input id="btn${RadioBtnIdNumber}" type="radio" name="">
                <span>${taskName.name}</span>
                <i class="fa-regular fa-star"></i>
            `;
            if(taskName.status == true){
              newTask.style.backgroundColor = "#c3b2b25c"
              newTask.querySelector("span").style.textDecoration ="line-through" ;
              newTask.querySelector("i").style.color ="white" ;
              newTask.querySelector("input").checked = true

            }else{
              newTask.style.backgroundColor = ""
              newTask.querySelector("span").style.textDecoration ="none" ;
              newTask.querySelector("i").style.color ="gray" ;
              newTask.querySelector("input").checked = false
            }
          tasksContainer.appendChild(newTask)
          whenRadioBtnTaskClicked()
          console.log(seletedPage)

        }

        console.log(`${clickedElement}`);
        console.log(` this is from object ${lists[clickedElement]}`);

        document.querySelector("body").style.backgroundColor = "aquamarine";
        break;
      case "Home":
        tasksContainer.innerHTML = ""
        for(let key in lists["Home"].tasks){
          let newTask = document.createElement('div');
            newTask.className = 'task';
            let taskName =lists["Home"].tasks[key]
            newTask.id = taskName.id;

            newTask.innerHTML = `
                <input id="btn${RadioBtnIdNumber}" type="radio" name="">
                <span>${taskName.name}</span>
                <i class="fa-regular fa-star"></i>
            `;
            if(taskName.status == true){
              newTask.style.backgroundColor = "#c3b2b25c"
              newTask.querySelector("span").style.textDecoration ="line-through" ;
              newTask.querySelector("i").style.color ="white" ;
              newTask.querySelector("input").checked = true

            }else{
              newTask.style.backgroundColor = ""
              newTask.querySelector("span").style.textDecoration ="none" ;
              newTask.querySelector("i").style.color ="gray" ;
              newTask.querySelector("input").checked = false
            }
          tasksContainer.appendChild(newTask)
          whenRadioBtnTaskClicked()
          console.log(seletedPage)

        }

        console.log(`${clickedElement}`);
        console.log(` this is from object ${lists[clickedElement]}`);

        document.querySelector("body").style.backgroundColor = "greenyellow";
        break;
      case "Tasks":
        tasksContainer.innerHTML = ""
        for(let key in lists["Tasks"].tasks){
          let newTask = document.createElement('div');
            newTask.className = 'task';
            
            let taskName =lists["Tasks"].tasks[key]
            newTask.id = taskName.id;
            newTask.innerHTML = `
                <input id="btn${RadioBtnIdNumber}" type="radio" name="">
                <span>${taskName.name}</span>
                <i class="fa-regular fa-star"></i>
            `;
            if(taskName.status == true){
              newTask.style.backgroundColor = "#c3b2b25c"
              newTask.querySelector("span").style.textDecoration ="line-through" ;
              newTask.querySelector("i").style.color ="white" ;
              newTask.querySelector("input").checked = true

            }else{
              newTask.style.backgroundColor = ""
              newTask.querySelector("span").style.textDecoration ="none" ;
              newTask.querySelector("i").style.color ="gray" ;
              newTask.querySelector("input").checked = false
            }
          tasksContainer.appendChild(newTask)
          whenRadioBtnTaskClicked()
          console.log(seletedPage)

        }

        console.log(`${clickedElement}`);
        console.log(` this is from object ${lists[clickedElement]}`);

        document.querySelector("body").style.backgroundColor = "whitesmoke";
        break;
    }
    console.log(clickedElement.textContent);
    console.log(seletedPage)

  });
});


// delet list when right click on it and click delet on contextmenu
// document.querySelectorAll(".list").forEach(function (element) {
//   element.addEventListener("contextmenu", function () {
//     clickedElement = this;
//     rightClickDetected = true
   

//   })})

//   DeleteList.addEventListener("click",function(){
//       if(rightClickDetected){
//         if(clickedElement.classList.contains("PrimaryList")){
//           alert("this list cannot be deleted")
//         }else{
//           console.log(clickedElement)
          
//           clickedElement.remove()
//         }
        
//         rightClickDetected = false;
//       }  
//   })




// enter task input
let enterTask =  document.getElementById("enterTask")

         function enterTaskClicked(){
          if(enterTask.value.trim() == ""){
            alert("task cannot be empty")
          }else{
            let newTask = document.createElement('div');
            newTask.className = 'task';
            RadioBtnIdNumber++
            newTask.id = `task${RadioBtnIdNumber}`;
            newTask.innerHTML = `
                <input id="btn${RadioBtnIdNumber}" type="radio" name="">
                <span>${enterTask.value}</span>
                <i class="fa-regular fa-star"></i>
            `;
           
            lists[clickedElement.textContent.trim()].tasks[`task${RadioBtnIdNumber}`] ={
              name : enterTask.value,
              status : false,
              id:  `task${RadioBtnIdNumber}`
            }
            
             tasksContainer.appendChild( newTask) 
              
                console.log('Enter is clicked');
                enterTask.value = ""



// delet task when right click on it and click delete on contextmenu

   
                   document.querySelectorAll(".task").forEach(function (element) {
                   element.addEventListener("contextmenu", function () {
                      clickedElement = this;
                      rightClickDetected = true
                     
                  
                    })})
                  
                    DeleteList.addEventListener("click",function(){
                        if(rightClickDetected){

                          clickedElement.remove()
                          console.log(`fffff ${clickedElement}`)
                          console.log(`fffff ${clickedElement}`)
                            rightClickDetected = false;
                          }
                        
                        }  
                    )
                  
                   
                    whenRadioBtnTaskClicked()

                     
           }
         }

// when click on plus icon push the new task
      document.getElementById("enterTaskIcon").addEventListener("click",function(){
        console.log("enterTaskIconIsCliked")
        enterTaskClicked()
      })
// when click on enter key on search  push the new task

       let RadioBtnIdNumber = 0
       let tasksContainer =  document.getElementById("tasks")
       enterTask.addEventListener('keydown', (event) => {
        
        if (event.key === 'Enter'  ) {
          enterTaskClicked()

          
        }
    });

    
    // search
    let searchField = document.getElementById("search")

    function search(){
      let TasksList = document.querySelectorAll(".task")

      for(let i = 0; i<TasksList.length;i++){
        if(TasksList[i].textContent.toLocaleLowerCase().includes(searchField.value.toLocaleLowerCase())){
          TasksList[i].style.display = "flex"
        }else{
          TasksList[i].style.display = "none"
        }
      }
    }
    
    searchField.addEventListener("input",search)
   // rename list
   let newListName
   
        let renameBtn =  document.getElementById("rename")
   document.querySelectorAll(".lsit").forEach(function (element) {
    element.addEventListener("contextmenu", function () {
       clickedElement = this;
       rightClickDetected = true
      
   
     })})

      // rename task
   document.querySelectorAll(".task").forEach(function (element) {
    element.addEventListener("contextmenu", function () {
      clickedElement = this;
       rightClickDetected = true
      
   
     })})
   
    // rename btn 
     renameBtn.addEventListener("click", function() {
      if (rightClickDetected) {
          // Check if the clicked element is a PrimaryList
          if (clickedElement.classList.contains("PrimaryList")) {
              alert("You can't change the list name.");
          } else if(clickedElement.classList.contains("list")) {
              // Prompt for new list name
              let newListName = prompt("Enter New List Name.");
              // Check if the new list name is empty or just whitespace
              if (newListName.trim() == "") {
                  alert("List name cannot be empty.");
              } else {
                  // Update the list name


                  lists[newListName] = lists[clickedElement.querySelector(".text").textContent];
                  delete lists[clickedElement.querySelector(".text").textContent];


                  clickedElement.querySelector(".text").textContent = newListName;
              }
          }else{
           let newTaskName  = prompt("Enter New Task Name.")
            if(newTaskName.trim() == ""){
              alert("Task name cannot be empty")
              rightClickDetected = false;
            }else{
              // console.log(clickedElement)
                // lists[clickedElement.querySelector(".text").textContent].tasks[newTaskName] = lists[clickedElement.querySelector(".text").textContent].tasks[ clickedElement.querySelector("span").textContent]
                // delete lists[clickedElement.querySelector(".text").textContent].tasks[ clickedElement.querySelector("span").textContent]
              
              clickedElement.querySelector("span").textContent = newTaskName
              rightClickDetected = false;
            }
           
            
          }
          }
          // Reset right-click detection
          rightClickDetected = false;
      }
  );
  
    
   
  // Change Background Color btn
  let ChangeBackgroundColorBtn = document.getElementById("ChangeBackgroundColorInput")
  ChangeBackgroundColorBtn.addEventListener("input",function(){
    if(rightClickDetected){
      if(clickedElement.classList.contains("PrimaryList")){
        alert("You can't change the list color.");
      }else{

        document.querySelector("body").style.backgroundColor = ChangeBackgroundColorBtn.value

      }
    }
  })


  let lists = {
    "My day" : {
      backgroundColor : "aliceblue",
      tasks : {
        
      }

    },
    Important : {
      backgroundColor : "aquamarine",
      tasks : {

      }

    },
    Home : {
      backgroundColor : "greenyellow",
      tasks : {

      }

    },
    Tasks : {
      backgroundColor : "whitesmoke",
      tasks : {

      }

    },
  }

 
    

 


