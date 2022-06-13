

window.onload = function() {
    console.log('hello, Rolling!');

    //button
    addButtonClickHandler();
}

 const addButtonClickHandler = () => {
     document.querySelector ('.portfolio__button').addEventListener('click', (e)=>{
        if(e.target.classList.contains ('button')){
            let clickedButton = e.target;
            removeSelectedButton();
        }
     })
 }

//  const removeSelectedButton = ()=> {
//      let buttons = document.querySelectorAll ('.portfolio__button .button');
//      buttons.forEach(button => {
//           button.classList.remove('button_bordered');


//      })
//  }