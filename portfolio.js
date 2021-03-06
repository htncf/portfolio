// this script fade-in every elements on page load
var elementTagToMakeAppear = ["h1", "h2", "h3"]
var classToMakeAppaear = ["bloc", "under_bloc", "language_switch"];
var temp = []
var elementsToMakeAppear = [];

for (let y = 0; y < elementTagToMakeAppear.length; y++) {
    temp.push(document.getElementsByTagName(elementTagToMakeAppear[y]));
}

for (let i = 0; i < classToMakeAppaear.length; i++) {
    temp.push(document.getElementsByClassName(classToMakeAppaear[i]));
}

for (let z = 0; z < temp.length; z++) {
    for (let y = 0; y < temp[z].length; y++) {
        elementsToMakeAppear.push(temp[z][y]);
    }
}

for (let k = 0; k < elementsToMakeAppear.length; k++) {
    elementsToMakeAppear[k].style.setProperty("opacity", "0");
    elementsToMakeAppear[k].style.setProperty("transition", "opacity 0.5s");
    elementsToMakeAppear[k].style.setProperty("-webkit-transition", "opacity 0.5s");
    elementsToMakeAppear[k].style.setProperty("-moz-transition", "opacity 0.5s");
    elementsToMakeAppear[k].style.setProperty("-o-transition", "opacity 0.5s");
}


var r = 0;


var that = setInterval(function () {
    if (r < elementsToMakeAppear.length){
        elementsToMakeAppear[r].style.setProperty("opacity", "1");
        r++;   
    }
    else{
        clearInterval(that);
        console.log(r);
    }
}, 50);

// this script allow to switch between english and french
const switchButton = document.getElementById("language_switch");
let elementTagToSwitch = ["h2", "h3", "h4", "p"]
let tempp = [];
let elementsToSwitch = [];
let isPageInEnglish = false;
let textInEnglish = []
let textInFrench = []

textInEnglish = ['<span class="rainbow">&lt;</span>Presentation<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Competences<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Projets<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Contact<span class="rainbow">&gt;</span>', "Web development skills", "Development skills", "Blockchain development skills", "Websites", "Games", "Evade!", 'T-rex Surfers', 'Welcome to my portfolio. I\'m Th??o Fonchain, I\'ve done a Scientific Baccalaureate before joining the Universit?? Paris Dauphine in an economic bachelor\'s degree. I spent two years there before a reorientation in computer science, with an IT DUT in a special year done at the IUT de Villetaneuse. From now on I wish to join a engineer school and specialize myself in the domain of cybersecurity. I have chosen cybersecurity after doing during 1 month of training courses in networks and in cybersecurity with the american entreprise <a href="https://cybrary.it" target="_blank">Cybrary</a>.<br><br>My mains development languages : HTML, CSS, Javascript, Python, C#, PHP, Java, and C. I\'ve started computer science as a self-taught person in secondary school with <a href="https://openclassrooms.com" target="_blank">OpenClassrooms</a>, where I\'ve learned the web languages and the C. Then, I\'ve learned the C# by creating video games on Unity. And about Python, I mainly use it for automation projects with Selenium, and also for other scripts. During my DUT, I\'ve been reenforcing strongly my mastery over all thoses languages by practicing daily, especialy Python and Java.<br><br>I\'m looking for a company internship in computer science paid and lasting aleast 10 weeks starting from the 13 June 2022, in order to validate my formation. I\'m also looking for a sandwich course in computer science in the cybersecurity domain for the 2022/2023 year. My CV is available <a href="otherfiles/cv_anglais_htncf.pdf" target="_blank">here</a>. Among my interests are computer science, video games, chess and politics. I\'m particularly interested in new technologies in the field of computing, such as blockchain or artificial intelligence.', "Any sensitive information is pixelated. You may click on an image to scale it up.", "", "This website is still online and going to be updated. The two last images are the last version of the site. It is used to promote an activity.", "", "This website ins't online anymore. It was used to promote an association.", "", 'This game is under development. The gif is a bit laggy but the game isn\'t as he run stable on 60fps on mobile. The main mechanics are set up, most of the remaining work lays in UI and making great graphics. If you wanna try it you can download the .apk file for Android <a href="otherfiles/Evade!_0.3.apk">here</a>.', '',  'This game is a group project who had to use PHP, SQL and JavaScript. We decided to make a little game where you have to evade obstacles. We stock the scores on a free MySql database and display them in a table. You can play online <a href="https://baele.fr/Projet">here</a>.',  'Feel free to contact me. You can send me a mail at htncf@protonmail.com.'];
textInFrench = ['<span class="rainbow">&lt;</span>Pr??sentation<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Comp??tences<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Projets<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Contact<span class="rainbow">&gt;</span>', "D??veloppement Web", "D??veloppement", "D??veloppement Blockchain", "Sites internet", "Jeux vid??os", "Evade!", 'T-rex Surfers', 'Bienvenue sur mon portfolio. Je m\'appelle Th??o Fonchain, j\'ai fait un Bac Scientifique avant de rejoindre l\'Universit?? Paris Dauphine dans une licence ??conomique. J\'y suis rest?? 2 ann??es avant de me r??orienter dans l\'informatique, ?? travers un DUT Informatique en ann??e sp??ciale effectu?? ?? l\'IUT de Villetaneuse. D??sormais je souhaite rejoindre une ??cole d\'ing??nieur et m\'y sp??cialiser dans le domaine de la cybers??curit??. J\'ai choisi la cybers??curit?? apr??s avoir suivi pendant 1 mois des formations en r??seaux et en s??curit?? informatique avec l\'entreprise am??ricaine <a href="https://cybrary.it" target="_blank">Cybrary</a>.<br><br>Mes langages de d??veloppement principaux sont : HTML, CSS, Javascript, Python, C#, PHP, Java, et C. J\'ai commenc?? l\'informatique en autodicdacte au coll??ge avec <a href="https://openclassrooms.com" target="_blank">OpenClassrooms</a>, o?? j\'ai appris les langages web et le C. Par la suite, j\'ai appris le C# ?? travers la cr??ation de jeux vid??os sur Unity. Quand ?? Python, je l\'utilise principalement pour des projets d\'automatisation avec Selenium, et ??galement pour d\'autres scripts. Au cours de mon DUT, j\'ai pu renforcer fortement ma ma??trise de tous ces langages en les pratiquant quotidiennement, notamment Python et Java.<br><br>Je suis ?? la recherche d\'un stage informatique r??mun??r?? de minimum 10 semaines ?? partir du 13 Juin 2022 afin de valider ma formation. Je suis ??galement ?? la recherche d\'une alternance en informatique dans le domaine de la cybers??curit?? pour l\'ann??e 2022/2023. Mon CV est disponible <a href="otherfiles/cv_htncf.pdf" target="_blank">i??i</a>.<br><br>Parmis mes centres d\'int??r??ts se trouvent l\'informatique, les jeux vid??os, les ??checs et la politique. Je m\'int??resse particuli??rement aux nouvelles technologies du domaine de l\'informatique, comme la blockchain ou l\'intelligence artificielle.', "Toutes les informations sensibles ont ??t?? cach??es. Vous pouvez cliquer sur une image pour l'agrandir.", "", "Ce site internet est toujours en ligne, et va ??tre mis ?? jour. Les deux derni??res images repr??sentent la derni??re version du site. Il est utilis?? pour promouvoir une activit??.", "", "Ce site internet n'est plus en ligne. Il ??tait utilis?? pour promouvoir une association.", "", 'Ce jeu est en cours de d??veloppement. Le gif donne une impression de lag mais le jeu est bien stable ?? 60fps sur mobile. Les m??chaniques de jeu marchent tr??s bien, la plupart du travail restant concerne l\'UI (l\'interface utilisateur) et les graphismes. Si vous voulez essayer, vous pouvez t??l??charger le fichier .apk pour Android <a href="otherfiles/Evade!_0.3.apk">i??i</a>.', '', 'Ce jeu est un projet de groupe, o?? nous devions utiliser PHP, SQL and JavaScript. Nous avons d??cid?? de faire un jeu simple o?? l\'on doit esquiver des obstacles. Nous stockons les scores dans une base de donn??es MySql gratutie et on les affiche dans un tableau. Vous pouvez jouez en ligne maintenant <a href="https://baele.fr/Projet">i??i</a>.', 'N\'h??sitez pas ?? me contacter. Vous pouvez m\'envoyer un mail ?? l\'adresse htncf@protonmail.com.'];

for (let y = 0; y < elementTagToSwitch.length; y++) {
    tempp.push(document.getElementsByTagName(elementTagToSwitch[y]));
}

console.log(tempp);

for (let z = 0; z < tempp.length; z++) {
    for (let y = 0; y < tempp[z].length; y++) {
        elementsToSwitch.push(tempp[z][y]);
    }
}

function SwitchLanguages(){
    isPageInEnglish = !isPageInEnglish;
    for (let i = 0; i < elementsToSwitch.length; i++) {
        if (isPageInEnglish){
            if (textInEnglish[i] != null && textInEnglish[i] !== ""){
                elementsToSwitch[i].innerHTML = textInEnglish[i];
            }
        }
        else{
            if (textInFrench[i] != null && textInFrench[i] !== ""){
                elementsToSwitch[i].innerHTML = textInFrench[i];
            }
        }
    }
}

switchButton.addEventListener("click", SwitchLanguages);
