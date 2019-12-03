/***************************** LABEL LOGIC ************************************/

// Used to reset the rectangle widths back to original size after stop hovering (%)
let rectWidth = {
    'about':10,
    'courses':12,
    'tech':14,
    'learning':22,
    'projects':24
}; 
// Used to reset labels back to original position (%)
let labelLocation = {
    'about-label': 11,
    'courses-label': 13,
    'tech-label': 15,
    'learning-label': 23,
    'projects-label': 25
}
let infoLable = document.querySelectorAll('.info-label');
let infoRect = document.querySelectorAll('.info-rect');

// Used for mouseout to know that a label clicked so dont do its thing
let labelClicked = false;
let labelThatClick =""; // This will hold id of the label that was clicked

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
            
            infoLable.forEach(thisLabel => {
                // Retract all the rectangles 
                let substring = getLabelSubstring(thisLabel.id);
                
                let rect = document.getElementById(substring + "-rect");
                if ((thisLabel.id !== e.target.id)) {
                    // Fold the rectangle to the side if hover
                    rect.classList.add('rect-folded');
                    thisLabel.classList.add('label-folded');
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

            if(e.target.id !== labelThatClick){
                e.target.style.color = 'rgb(72, 72, 66)'; // Return the color to grey
            }
            infoLable.forEach(thisLabel => {

                // Return all the rectangles back to normal size
                let substring = getLabelSubstring(thisLabel.id);                

                let rect = document.getElementById(substring + "-rect");
                rect.style.backgroundColor = 'rgb(72, 72, 66)';
                if(!labelClicked){
                    // If label is clicked then keep retracted
                    rect.classList.remove('rect-folded');
                    thisLabel.classList.remove('label-folded');
                }
            });
        
    });

    /************************* CLICK LABEL **********************************
    * Dark grey part of background shrinks to top left
    * Lable clicked goes to top left (associated retangle completly retracts)
    * Other labels font size shrinks
    */
    currLabel.addEventListener('click',(e)=>{
        labelClicked = true; // Let program know that a label was clicked
        labelThatClick = e.target.id; // Let program know what label was clicked
        /*** NAME HEADER/ FULL STACK HEADER ***/
        let nameLabel = document.getElementById('name-label'); // Retract name label to left
        let positionLabel = document.getElementById('position-label'); // Retract position label to right
        nameLabel.classList.add('name-label-hidden');
        positionLabel.classList.add('position-label-hidden');


        /*** BACKGROUND ***/
        let bottomHalf = document.getElementById('bottom-half-landing');
        let topHalf = document.getElementById('top-half-landing');
        // When click the label, all others retract
        bottomHalf.classList.add('bottom-half-landing-folded');
        topHalf.classList.add('top-half-landing-folded');


    
            // Change the color of the word label clicked
            label.style.color = 'white';

            infoLable.forEach(thisLabel => {
                // Retract all the rectangles
                // Get the substring to select associated rectangle 
                let substring = getLabelSubstring(thisLabel.id);
                let rect = document.getElementById(substring + "-rect"); // Get rectangle of associated label
                let header = document.getElementById(substring + "-header"); // Get the header to transition

                if ((thisLabel.id !== e.target.id)) {
                    // Hide the labels not clicked
                    rect.classList.add('rect-folded'); // Fold the rectangle
                    thisLabel.classList.add('label-folded'); // Fold the lable
                    thisLabel.classList.add('label-smaller'); // Shrink the font size
                    rect.classList.remove('rect-hidden'); // Make not hidded anymore
                    thisLabel.classList.remove('label-hidden'); // Move the clicked from header to list
                    header.classList.remove('label-header'); // Transitions header back out of screen
                    thisLabel.style.color = 'rgb(72, 72, 66)';// Make sure if was white is grey now
                } else {
                    header.classList.add('label-header'); // Transitions header from left
                    thisLabel.classList.remove('label-smaller'); // Remove shrink to the font size
                    thisLabel.classList.add('label-hidden'); // Move the clicked word to the header

                    // thisLabel.classList.add('label-header'); // Move the clicked word to the header
                    // Hide the rectangle of the label clicked
                    rect.classList.add('rect-hidden');
                }
            });
        
    })
});

let getLabelSubstring=(labelID)=>{
 /* Takes the label of current button and gets its label name */
   return labelID.split("").reverse().join("").substring(6).split("").reverse().join("");

}




