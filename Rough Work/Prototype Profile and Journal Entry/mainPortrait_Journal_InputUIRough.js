//VARS FOR PENGUIN PORTRAIT

let elPortraitFace = document.querySelector('.PortraitFace');
let elfaceImg = document.getElementById('faceImg');
console.log(elfaceImg.src);

let elPortraitExpress = document.querySelector('.PortraitExpression');
let elPortraitBg = document.querySelector('.PortraitBackground');

let elPengPortrait= document.querySelector('.pengPortrait');

//FUNCTIONS FOR PORTRAIT EXPRESSIONS

function func_express1(){elfaceImg.src = 'Icons/1F634_color.png';}

function func_express2(){elfaceImg.src = 'Icons/1FAE8_color.png';}

function func_express3(){elfaceImg.src = 'Icons/1F601_color.png';}

function func_express4(){elfaceImg.src = 'Icons/1F622_color.png';}

function func_express5(){elfaceImg.src = 'Icons/1F621_color.png';}

function func_express6(){elfaceImg.src = 'Icons/1FAE3_color.png';}

//FUNCTIONS FOR EXPRESSION AND BACKGROUND BUTTONS VISIBILITY

elPortraitFace.addEventListener('focusin', ()=> {
portraitButtons_visible();
elPortraitFace.style.outline = 'black solid 2px';
elPortraitFace.style.outlineOffset = '-2px';
});

elPortraitExpress.addEventListener('mousemove', ()=> {
portraitButtons_visible();
});

elPortraitBg.addEventListener('mousemove', ()=> {
portraitButtons_visible();
});

elPengPortrait.addEventListener('mouseleave', ()=> {
portraitButtons_hidden();
elPortraitFace.blur();
elPortraitFace.style.outline = 'none';
});

function portraitButtons_visible(){
elPortraitExpress.style.visibility = 'visible';
elPortraitBg.style.visibility = 'visible';
}

function portraitButtons_hidden(){
elPortraitExpress.style.visibility = 'hidden';
elPortraitBg.style.visibility = 'hidden';
}

//FUNCTIONS FOR PORTRAIT BACKGROUND

function func_bg1(){elPortraitFace.style.background = 'pink';}

function func_bg2(){elPortraitFace.style.background = 'blue';}

function func_bg3(){elPortraitFace.style.background = 'red';}

function func_bg4(){elPortraitFace.style.background = 'orange';}

function func_bg5(){elPortraitFace.style.background = 'white';}

function func_bg6(){elPortraitFace.style.background = 'rgb(30, 30, 30)';}

//VARS FOR JOURNAL BODY FORM

const btnAddText = document.querySelector('.addText');
const formBodyText = document.querySelector('.addBodyForm'); 
//formBodyText.showModal(); 

const btnCloseBodyForm = document.querySelector('.closeBodyForm');

const elEntryText = document.querySelector('.entryText'); //don't use let, elEntryText will not be assigned to any other element

const elCharTotal = document.getElementById('charTotal');
const charTotalNumb = Number(elCharTotal.textContent);

const elYourWriting = document.getElementById('yourWriting');
let charNumb = Number(elYourWriting.value.length); 

elCharTotal.textContent = String(charTotalNumb - charNumb);

//FUNCTIONS FOR JOURNAL BODY FORM

function func_ShowFormBodyText(){
formBodyText.showModal(); 
console.log('form shows');
}

function func_CloseBodyForm(){
let valueYourWriting = String(document.getElementById('yourWriting').value); //Place inside function in order to reflect changes to textarea value 
console.log(valueYourWriting);
elEntryText.textContent = (valueYourWriting); 
formBodyText.close(); 
}

function func_CharCount(){
charNumb = Number(elYourWriting.value.length); 
console.log(charNumb); 
elCharTotal.textContent = String(charTotalNumb - charNumb);
console.log(elCharTotal.textContent);
}

//VARS FOR CUSTOMIZING JOURNAL

const elBodyText = document.querySelector('.bodyText');
const blkJournalDate= document.querySelector('.journalDate');

//VAR FOR SUBMITTING JOURNAL

const opDay = document.getElementById('dayFinal');
const opMonth = document.getElementById('monthFinal');
const opYear = document.getElementById('yearFinal');

let newDayVal; 
let newMonthVal; 
let newYrVal;

const selDatesOp = document.querySelectorAll('.journalDate > select');

const spnDateFinal = document.querySelector('.dateFinal > span'); 
const elTitleInput = document.querySelector('.titleInput');
const spnEntryTitle = document.querySelector('.entryTitle > span');

const btnSubmitJournal = document.querySelector('.submitJournal');
const btnEditJournal = document.getElementById('editJournal');

let puncDot; 
let puncComma;

//FUNCTIONS FOR SUBMITTING AND EDITING JOURNAL

function func_submitJournal(){
func_dateFinal();
func_entryTitle();

selDatesOp.forEach((select) => {select.style.display = 'none';});
btnAddText.style.visibility = 'collapse';

btnSubmitJournal.style.display = 'none';
btnEditJournal.style.display = 'inline';
}

function func_editJournal(){
spnDateFinal.style.display = 'none'; 
spnEntryTitle.style.display = 'none';

selDatesOp.forEach((select) => {select.style.display = 'inline';});
btnAddText.style.visibility = 'visible';
elTitleInput.style.display = 'inline';

btnEditJournal.style.display = 'none';
btnSubmitJournal.style.display = 'inline';
}

//FUNCTIONS FOR UPDATING DATE AND TIME OF JOURNAL

function func_dateFinal(){
if(opDay.value === 'type'){
newDayVal = '';
puncComma = ''; //puncComma = null doesn't work, null is returned as a string?
} else {
puncComma = ', ';
newDayVal = opDay.value;
}

if(opMonth.value === 'type'){
newMonthVal = ''; 
puncDot = '';
} else {
puncDot = '. ';
newMonthVal = opMonth.value;
}

if(opYear.value === 'type'){
newYrVal = ''; 
} else {
newYrVal = opYear.value;
}

console.log('Month: ' + newMonthVal + '|Day: ' + newDayVal + '|Year: ' + newYrVal)
spnDateFinal.textContent = (newMonthVal + puncDot + newDayVal + puncComma + newYrVal);
spnDateFinal.style.display = 'inline';
}

function func_entryTitle(){
if(elTitleInput.value === ''){
elTitleInput.value = '';
}

elTitleInput.style.display = 'none';
spnEntryTitle.textContent = elTitleInput.value;
}

//FUNCTIONS FOR CUSTOMIZING JOURNAL

function func_stylus1(){elBodyText.style.fontFamily = spnDateFinal.style.fontFamily = 'Times New Roman, serif';}

function func_stylus2(){elBodyText.style.fontFamily = spnDateFinal.style.fontFamily = spnEntryTitle.style.fontFamily = 'Courier New, monospace';}

function func_stylus3(){elBodyText.style.fontFamily = spnDateFinal.style.fontFamily = 'Brush Script MT, cursive';}

function func_stylus4(){elBodyText.style.fontFamily = spnDateFinal.style.fontFamily = 'Papyrus, fantasy';}