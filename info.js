// Assigns variables to the 3 info boxes present on the info page (the content of those boxes, not the title or the button inside it).
const box = {
	recommendations: document.getElementById('recommendations'),
    basicInfo: document.getElementById('basicInfo'),
    notes: document.getElementById('notes')
};
// Assigns variables to the 3 arrow buttons present to the left of the titles.
const button = {
	recommendations: document.getElementById('recommendationsImg'),
    basicInfo: document.getElementById('basicInfoImg'),
    notes: document.getElementById('notesImg')
};
// Creates event listeners for the 3 buttons.
button.recommendations.addEventListener('click', () => toggle('recommendations'));
button.basicInfo.addEventListener('click', () => toggle('basicInfo'));
button.notes.addEventListener('click', () => toggle('notes'));
// Collapses the two latter boxes by default.
box.recommendations.style.display = 'none';
box.notes.style.display = 'none';
// Toggles the displayed content present in the boxes whenever one of the corresponding buttons is clicked + changes the appearance of the buttons accordingly.
function toggle(thing) {
    if (box[`${thing}`].style.display != 'none') {
        box[`${thing}`].style.display = 'none'
        button[`${thing}`].src = `arrow_right.png`
    } else {
        box[`${thing}`].style.display = 'initial'
        button[`${thing}`].src = `arrow_down.png`
    }
};
// Assigns variables to the two buttons as well as to the displayed image in the notes box.
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const pic = document.getElementById('notesPic');
// Creates a variable that will track the number of the displayed photo.
const photoNavNum = document.getElementById('notesNum');
// Creates event listeners for the 2 buttons.
previous.addEventListener('click', () => switchPhoto(-1));
next.addEventListener('click', () => switchPhoto(1));
// Switches the photo whenether one of the two buttons is clicked + makes sure that the user cannot go beyond the existing photos by removing one of the buttons.
previous.style.display = 'none';
let photoNum = 1;
function switchPhoto(num) {
    photoNum = photoNum + num;
    console.log(photoNum);
    if (photoNum <= 1) {
        previous.style.display = 'none'
    } else if (photoNum >= 0 && previous.style.display == 'none') {
        previous.style.display = 'initial'
    };
    if (photoNum >= 72) {
        next.style.display = 'none'
    } else if (photoNum <= 72 && next.style.display == 'none') {
        next.style.display = 'initial'
    };
    pic.src = `images/js_${photoNum}.jpeg`;
    photoNavNum.innerText = `${photoNum}/72 (JS)`;
}