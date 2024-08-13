// const lyrics=["His soul's escaping through this hole that is gaping<br>This world is mine for the taking, make me king<br>As we move toward a new world order",
// "But for me to rap like a computer it must be in my genes<br>I got a laptop in my back pocket<br>My pen'll go off when I half-cock it<br>Got a fat knot from that rap profit",
// "Though I'm not the first king of controversy<br>I am the worst thing since Elvis Presley<br>To do Black music so selfishly<br>And use it to get myself wealthy",
// "Rihanna just hit me on a text<br>Last night I left hickeys on her neck<br>Wait, you just dissed me? I'm perplexed<br>Insult me in a line, compliment me on the next",
// "Look, I'm really flattered you would call your daughter that<br>And here's an autograph for your brother; I wrote it on a Starter cap<br>I'm sorry I didn't see you at the show, I must've missed you<br>Don't think I did that shit intentionally just to diss you",
// "You think I give a damn about a Grammy?<br>Half of you critics can't even stomach me, let alone stand me<br>\"But Slim, what if you win? Wouldn't it be weird?\"<br>Why? So you guys could just lie to get me here?",
// "My fist is balled back up against the wall, pencil drawn<br>This is just the song to go ballistic on<br>You just pulled a pistol on the guy with a missile launcher",
// "Cause if I'm the music that y'all grew up on<br>I\'m responsible for you retarded fools<br>I\'m the super villain Dad and Mom was losin' their marbles to",
// "Hailie Jade, I love that name<br>Love that tattoo, what's that say?<br>\"Rot In Pieces,\" uh, that's great",
// "Where you going?\" — \"I'm leaving you!\" — \"No, you ain\'t!<br>Come back!\" — We\'re runnin\' right back, here we go again<br>It\'s so insane, \'cause when it\'s goin\' good, it\'s goin\' great<br>I\'m Superman with the wind at his back, she\'s Lois Lane",
// "It was my decision to get clean, I did it for me<br>Admittedly I probably did it subliminally for you<br>So I could come back a brand-new me",
// "I hear applause, all this time I couldn't see<br>How could it be that the curtain is closin' on me?<br>I turn around, find a gun on the ground, cock it<br>Put it to my brain, scream, \"Die, Shady!\" and pop it",
// "I remember back one year when Daddy had no money<br>Mommy wrapped the Christmas presents up and stuck 'em under the tree<br>And said some of 'em were from me 'cause Daddy couldn't buy 'em<br>I'll never forget that Christmas, I sat up the whole night crying",
// ];

// const opta=["Lose Yourself","Not Afraid","Headlights","Cleaning Out my Closet","Stan","Without Me","Killshot","Rap God","Superman","Venom","My Name Is","The Real Slim Shady","Mockingbird"];
// const optb=["Superman","Rap God","Not Afraid","Godzilla","Superman","The Real Slim Shady","Sing For The Moment","Love The Way You Lie","Venom","The Way I Am","Space Bound","The Monster","When I\'m Gone"];
// const optc=["Lucky You","Sing For The Moment","Without Me","The Way I Am","River","Those Kinda Nights","Godzilla","The Way I Am","Headlights","Superman","Not Afraid","Mockingbird","Higher"];
// const optd=["Til\' I Collapse","Space Bound","Lose Yourself","Killshot","The Monster","River","White America","Venom","My Name Is","Love The Way You Lie","Those Kinda Nights","When I\'m Gone","Renegade"];
// const answers=["Lose Yourself",
// "Rap God",
// "Without Me",
// "Killshot",
// "Stan",
// "The Real Slim Shady",
// "Godzilla",
// "Venom",
// "Superman",
// "Love The Way You Lie",
// "Not Afraid",
// "When I\'m Gone",
// "Mockingbird"];

// const l=document.getElementById("lyric")
// const idc1=document.getElementById("opt-a");
// const idc2=document.getElementById("opt-b");
// const idc3=document.getElementById("opt-c");
// const idc4=document.getElementById("opt-d");
// const cont=document.getElementsByClassName("choice-container");

// var doneq=[];
// let qc=0;
// let count=0;
// const stop=5;
// var SCORE=0;

// function nextq(){
//     if (qc==stop){
//         // window.open('endgamepage.html');
//         window.location.href = 'endgamepage.html';
//     }
//     count=newq();
//     que=lyrics[count];
//     //so as to not repeat question
//     do {
//         count = newq();
//     } while (doneq.includes(count));
//     doneq.push(count);

//     l.innerHTML=que;
//     idc1.innerHTML=opta[count];
//     idc2.innerHTML=optb[count];
//     idc3.innerHTML=optc[count];
//     idc4.innerHTML=optd[count];
//     qc++;
// }
// function newq(){
//     let newqn=Math.floor(Math.random()*13);
//     return newqn;
// }

// function maingame(){
//     qone=Math.floor(Math.random()*13);
//     count=qone;
//     l.innerHTML=lyrics[qone];
//     doneq[qc]=l;
//     idc1.innerHTML=opta[qone];
//     idc2.innerHTML=optb[qone];
//     idc3.innerHTML=optc[qone];
//     idc4.innerHTML=optd[qone];
//     qc++;

//     idc1.addEventListener('click', ()=>{
//         checkAnswer(opta[count],count, idc1);
//         disableOptions();
//     })

//     idc2.addEventListener('click', ()=>{
//         checkAnswer(optb[count],count, idc2);
//         disableOptions();
//     })

//     idc3.addEventListener('click', ()=>{
//         checkAnswer(optc[count],count, idc3);
//         disableOptions();
//     })

//     idc4.addEventListener('click', ()=>{
//         checkAnswer(optd[count],count, idc4);
//         disableOptions();
//     })
//     // console.log("maingame");
//     // console.log(opta[qone]);


// }

// document.addEventListener("DOMContentLoaded",function(){
//     maingame();

// });

// function checkAnswer(selectedOption,qone,cls) {
//     console.log(SCORE);
//     const correctAnswer = answers[qone].trim().toLowerCase(); // Trim and convert to lowercase for comparison
//     const selectedOptionTrimmed = selectedOption.trim().toLowerCase(); // Trim and convert to lowercase
//     if (selectedOptionTrimmed === correctAnswer) {
//         console.log("Correct!");
//         cls.classList.add('correct');
//         SCORE++;
//         // Do something when the answer is correct
//     } else {
//         console.log("Incorrect!");
//         console.log(`Correct Answer:${correctAnswer}`);
//         cls.classList.add('wrong');
//         let qa=opta[qone].trim().toLowerCase();
//         let qb=optb[qone].trim().toLowerCase();
//         let qc=optc[qone].trim().toLowerCase();
//         let crtans;
//         if (qa === correctAnswer) {
//             crtans = idc1;
//         } else if (qb === correctAnswer) {
//             crtans = idc2;
//         } else if (qc === correctAnswer) {
//             crtans = idc3;
//         } else {
//             crtans = idc4;
//         }
//                 crtans.classList.add('correct');
//         // Do something when the answer is incorrect
//     }
// }

// /*
// function disableOptions(){
//     idc1.classList.add('disabled');
//     idc2.classList.add('disabled');
//     idc3.classList.add('disabled');
//     idc4.classList.add('disabled');
//     // cho.classList.add('disabled');

//     setTimeout(function(){
//         nextq();
//         enableOptions();
//     },5000);
// }

// function enableOptions(){
//     idc1.classList.remove('disabled');
//     idc2.classList.remove('disabled');
//     idc3.classList.remove('disabled');
//     idc4.classList.remove('disabled');
//     idc1.classList.remove('correct');
//     idc2.classList.remove('correct');
//     idc3.classList.remove('correct');
//     idc4.classList.remove('correct');
//     idc1.classList.remove('wrong');
//     idc2.classList.remove('wrong');
//     idc3.classList.remove('wrong');
//     idc4.classList.remove('wrong');
//     // cho.classList.remove('disabled');
// }*/

// function disableOptions() {
//     [idc1, idc2, idc3, idc4].forEach(optionElement => optionElement.classList.add('disabled'));
//     setTimeout(() => {
//         nextq();
//         enableOptions();
//     }, 5000);
// }

// function enableOptions() {
//     [idc1, idc2, idc3, idc4].forEach(optionElement => {
//         optionElement.classList.remove('disabled', 'correct', 'wrong');
//     });
// }

const lyrics = [
    "His soul's escaping through this hole that is gaping<br>This world is mine for the taking, make me king<br>As we move toward a new world order",
    "But for me to rap like a computer it must be in my genes<br>I got a laptop in my back pocket<br>My pen'll go off when I half-cock it<br>Got a fat knot from that rap profit",
    "Though I'm not the first king of controversy<br>I am the worst thing since Elvis Presley<br>To do Black music so selfishly<br>And use it to get myself wealthy",
    "Rihanna just hit me on a text<br>Last night I left hickeys on her neck<br>Wait, you just dissed me? I'm perplexed<br>Insult me in a line, compliment me on the next",
    "Look, I'm really flattered you would call your daughter that<br>And here's an autograph for your brother; I wrote it on a Starter cap<br>I'm sorry I didn't see you at the show, I must've missed you<br>Don't think I did that shit intentionally just to diss you",
    "You think I give a damn about a Grammy?<br>Half of you critics can't even stomach me, let alone stand me<br>\"But Slim, what if you win? Wouldn't it be weird?\"<br>Why? So you guys could just lie to get me here?",
    "My fist is balled back up against the wall, pencil drawn<br>This is just the song to go ballistic on<br>You just pulled a pistol on the guy with a missile launcher",
    "Cause if I'm the music that y'all grew up on<br>I\'m responsible for you retarded fools<br>I\'m the super villain Dad and Mom was losin' their marbles to",
    "Hailie Jade, I love that name<br>Love that tattoo, what's that say?<br>\"Rot In Pieces,\" uh, that's great",
    "Where you going?\" — \"I'm leaving you!\" — \"No, you ain\'t!<br>Come back!\" — We\'re runnin\' right back, here we go again<br>It\'s so insane, \'cause when it\'s goin\' good, it\'s goin\' great<br>I\'m Superman with the wind at his back, she\'s Lois Lane",
    "It was my decision to get clean, I did it for me<br>Admittedly I probably did it subliminally for you<br>So I could come back a brand-new me",
    "I hear applause, all this time I couldn't see<br>How could it be that the curtain is closin' on me?<br>I turn around, find a gun on the ground, cock it<br>Put it to my brain, scream, \"Die, Shady!\" and pop it",
    "I remember back one year when Daddy had no money<br>Mommy wrapped the Christmas presents up and stuck 'em under the tree<br>And said some of 'em were from me 'cause Daddy couldn't buy 'em<br>I'll never forget that Christmas, I sat up the whole night crying",
];

const opta = ["Lose Yourself", "Not Afraid", "Headlights", "Cleaning Out my Closet", "Stan", "Without Me", "Killshot", "Rap God", "Superman", "Venom", "My Name Is", "The Real Slim Shady", "Mockingbird"];
const optb = ["Superman", "Rap God", "Not Afraid", "Godzilla", "Superman", "The Real Slim Shady", "Sing For The Moment", "Love The Way You Lie", "Venom", "The Way I Am", "Space Bound", "The Monster", "When I\'m Gone"];
const optc = ["Lucky You", "Sing For The Moment", "Without Me", "The Way I Am", "River", "Those Kinda Nights", "Godzilla", "The Way I Am", "Headlights", "Superman", "Not Afraid", "Mockingbird", "Higher"];
const optd = ["Til\' I Collapse", "Space Bound", "Lose Yourself", "Killshot", "The Monster", "River", "White America", "Venom", "My Name Is", "Love The Way You Lie", "Those Kinda Nights", "When I\'m Gone", "Renegade"];
const answers = ["Lose Yourself", "Rap God", "Without Me", "Killshot", "Stan", "The Real Slim Shady", "Godzilla", "Venom", "Superman", "Love The Way You Lie", "Not Afraid", "When I\'m Gone", "Mockingbird"];

const l = document.getElementById("lyric");
const idc1 = document.getElementById("opt-a");
const idc2 = document.getElementById("opt-b");
const idc3 = document.getElementById("opt-c");
const idc4 = document.getElementById("opt-d");

var doneq = [];
let qc = 0;
let count = 0;
const stop = 5;
var SCORE = 0;

function nextq() {
    if (qc == stop) {
        window.location.href = 'endgamepage.html';
    }

    do {
        count = newq();
    } while (doneq.includes(count));

    doneq.push(count);

    const que = lyrics[count];
    l.innerHTML = que;
    idc1.innerHTML = opta[count];
    idc2.innerHTML = optb[count];
    idc3.innerHTML = optc[count];
    idc4.innerHTML = optd[count];
    qc++;
}

function newq() {
    let newqn = Math.floor(Math.random() * 13);
    return newqn;
}

function maingame() {
    count = Math.floor(Math.random() * lyrics.length);
    doneq.push(count);

    l.innerHTML = lyrics[count];
    idc1.innerHTML = opta[count];
    idc2.innerHTML = optb[count];
    idc3.innerHTML = optc[count];
    idc4.innerHTML = optd[count];
    qc++;

    idc1.addEventListener('click', () => {
        checkAnswer(opta[count], count, idc1);
        disableOptions();
    });

    idc2.addEventListener('click', () => {
        checkAnswer(optb[count], count, idc2);
        disableOptions();
    });

    idc3.addEventListener('click', () => {
        checkAnswer(optc[count], count, idc3);
        disableOptions();
    });

    idc4.addEventListener('click', () => {
        checkAnswer(optd[count], count, idc4);
        disableOptions();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    maingame();
});

function checkAnswer(selectedOption, qone, cls) {
    const correctAnswer = answers[qone].trim().toLowerCase(); 
    const selectedOptionTrimmed = selectedOption.trim().toLowerCase(); 
    if (selectedOptionTrimmed === correctAnswer) {
        cls.classList.add('correct');
        console.log("CORRECT ANSWER!")
        SCORE++;
    } else {
        cls.classList.add('wrong');
        console.log('WRONG ANSWER :/')
        highlightCorrectAnswer(qone);
    }
    console.log(`Current Score:${SCORE}`);
}

function highlightCorrectAnswer(qone) {
    const correctAnswer = answers[qone].trim().toLowerCase();
    const optionElements = [idc1, idc2, idc3, idc4];
    optionElements.forEach((optionElement, index) => {
        const currentOption = [opta, optb, optc, optd][index][qone].trim().toLowerCase();
        if (currentOption === correctAnswer) {
            optionElement.classList.add('correct');
            console.log(`CORRECT ANSWER: ${currentOption}`);
        }
    });
}

function disableOptions() {
    [idc1, idc2, idc3, idc4].forEach(optionElement => optionElement.classList.add('disabled'));
    setTimeout(() => {
        nextq();
        enableOptions();
    }, 5000);
}

function enableOptions() {
    [idc1, idc2, idc3, idc4].forEach(optionElement => {
        optionElement.classList.remove('disabled', 'correct', 'wrong');
    });
}
