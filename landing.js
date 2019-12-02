/***************************** LABEL LOGIC ************************************/

// Used to reset the rectangle widths back to original size after stop hovering
let rectWidth = {
    'about':10,
    'courses':12,
    'tech':14,
    'learning':22,
    'projects':24
}; 
let labelLocation = {
    'about-label': 11,
    'courses-label': 13,
    'tech-label': 15,
    'learning-label': 23,
    'projects-label': 25
}
let infoLable = document.querySelectorAll('.info-label');
let infoRect = document.querySelectorAll('.info-rect');

// Loop through all the labels and if hover over it then turn yellow 
// and make text bigger
// Rectangle retracts beside it as well
infoLable.forEach(label => {
    let currLabel = document.getElementById(label.id);
    
    /************************* HOVER MOUSE **********************************
     * The label and associated rectangle being hovered should be yellow
     * The other rectangles should retract and lables as well (to right)
    */
    currLabel.addEventListener('mouseover', (e) => {

        // Get the word used to attach to the rectangle
        if (label.id === e.target.id){
            // Change the color of the word label if hover
            label.style.color = 'yellow';
            
            infoLable.forEach(lable => {
                // Retract all the rectangles 
                let substring = lable.id.split("").reverse().join("").substring(6).split("").reverse().join("");
                let rect = document.getElementById(substring + "-rect");
                if ((lable.id !== e.target.id)) {
                    // Fold the rectangle to the side if hover
                    rect.classList.add('rect-folded');
                    lable.classList.add('label-folded');
                }else{
                    // Change the color of the rectangle to yellow of the one hovering
                    rect.style.backgroundColor = 'yellow';
                }
            })
        }
        
    });

    /************************* UNHOVER MOUSE **********************************
    * This will return the color of label to grey when mouse stops hovering label
    * Rectangle goes back to normal
    */
    label.addEventListener('mouseout', (e) => {
        e.target.style.color = 'rgb(72, 72, 66)'; // Return the color to grey
        infoLable.forEach(lable => {
            // Return all the rectangles back to normal size
            let substring = lable.id.split("").reverse().join("").substring(6).split("").reverse().join("");

            let rect = document.getElementById(substring + "-rect");
            rect.classList.remove('rect-folded');
            lable.classList.remove('label-folded');
            rect.style.backgroundColor = 'rgb(72, 72, 66)';

        })
    });

    /************************* CLICK LABEL **********************************
    * Dark grey part of background shrinks to top left
    * Lable clicked goes to top left (associated retangle completly retracts)
    * Other labels font size shrinks
    */
    currLabel.addEventListener('click',(e)=>{
        
        /*** BACKGROUND ***/
        let bottomHalf = document.getElementById('bottom-half-landing');
        let topHalf = document.getElementById('top-half-landing');
        // When click the label, all others retract
        bottomHalf.classList.add('bottom-half-landing-folded');
        topHalf.classList.add('top-half-landing-folded');


        // // Get the word used to attach to the rectangle
        // if (label.id === e.target.id) {
        //     // Change the color of the word label clicked
        //     label.style.color = 'white';

        //     infoLable.forEach(lable => {
        //         // Retract all the rectangles 
        //         let substring = lable.id.split("").reverse().join("").substring(6).split("").reverse().join("");
        //         let rect = document.getElementById(substring + "-rect");
        //         if ((lable.id !== e.target.id)) {
        //             // Hide the labels not clicked
        //             rect.classList.add('rect-folded');
        //             lable.classList.add('label-folded');
        //         } else {
        //             // Change the color of the rectangle to yellow of the one hovering
        //             rect.style.backgroundColor = 'yellow';
        //         }
        //     })
        // }
    })
});





