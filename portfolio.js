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

textInEnglish = ['<span class="rainbow">&lt;</span>Presentation<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Competences<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Projets<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Contact<span class="rainbow">&gt;</span>', "Web development skills", "Development skills", "Blockchain development skills", "Websites", "Games", "Evade!", 'T-rex Surfers', 'Welcome to my portfolio. I\'m Théo Fonchain, I\'ve done a Scientific Baccalaureate before joining the Université Paris Dauphine in an economic bachelor\'s degree. I spent two years there before a reorientation in computer science, with an IT DUT in a special year done at the IUT de Villetaneuse. From now on I wish to join a engineer school and specialize myself in the domain of cybersecurity. I have chosen cybersecurity after doing during 1 month of training courses in networks and in cybersecurity with the american entreprise <a href="https://cybrary.it" target="_blank">Cybrary</a>.<br><br>My mains development languages : HTML, CSS, Javascript, Python, C#, PHP, Java, and C. I\'ve started computer science as a self-taught person in secondary school with <a href="https://openclassrooms.com" target="_blank">OpenClassrooms</a>, where I\'ve learned the web languages and the C. Then, I\'ve learned the C# by creating video games on Unity. And about Python, I mainly use it for automation projects with Selenium, and also for other scripts. During my DUT, I\'ve been reenforcing strongly my mastery over all thoses languages by practicing daily, especialy Python and Java.<br><br>I\'m looking for a company internship in computer science paid and lasting aleast 10 weeks starting from the 13 June 2022, in order to validate my formation. I\'m also looking for a sandwich course in computer science in the cybersecurity domain for the 2022/2023 year. My CV is available <a href="otherfiles/cv_anglais_htncf.pdf" target="_blank">here</a>. Among my interests are computer science, video games, chess and politics. I\'m particularly interested in new technologies in the field of computing, such as blockchain or artificial intelligence.', "Any sensitive information is pixelated. You may click on an image to scale it up.", "", "This website is still online and going to be updated. The two last images are the last version of the site. It is used to promote an activity.", "", "This website ins't online anymore. It was used to promote an association.", "", 'This game is under development. The gif is a bit laggy but the game isn\'t as he run stable on 60fps on mobile. The main mechanics are set up, most of the remaining work lays in UI and making great graphics. If you wanna try it you can download the .apk file for Android <a href="otherfiles/Evade!_0.3.apk">here</a>.', '',  'This game is a group project who had to use PHP, SQL and JavaScript. We decided to make a little game where you have to evade obstacles. We stock the scores on a free MySql database and display them in a table. You can play online <a href="https://baele.fr/Projet">here</a>.',  'Feel free to contact me. You can send me a mail at htncf@protonmail.com.'];
textInFrench = ['<span class="rainbow">&lt;</span>Présentation<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Compétences<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Projets<span class="rainbow">&gt;</span>', '<span class="rainbow">&lt;</span>Contact<span class="rainbow">&gt;</span>', "Développement Web", "Développement", "Développement Blockchain", "Sites internet", "Jeux vidéos", "Evade!", 'T-rex Surfers', 'Bienvenue sur mon portfolio. Je m\'appelle Théo Fonchain, j\'ai fait un Bac Scientifique avant de rejoindre l\'Université Paris Dauphine dans une licence économique. J\'y suis resté 2 années avant de me réorienter dans l\'informatique, à travers un DUT Informatique en année spéciale effectué à l\'IUT de Villetaneuse. Désormais je souhaite rejoindre une école d\'ingénieur et m\'y spécialiser dans le domaine de la cybersécurité. J\'ai choisi la cybersécurité après avoir suivi pendant 1 mois des formations en réseaux et en sécurité informatique avec l\'entreprise américaine <a href="https://cybrary.it" target="_blank">Cybrary</a>.<br><br>Mes langages de développement principaux sont : HTML, CSS, Javascript, Python, C#, PHP, Java, et C. J\'ai commencé l\'informatique en autodicdacte au collège avec <a href="https://openclassrooms.com" target="_blank">OpenClassrooms</a>, où j\'ai appris les langages web et le C. Par la suite, j\'ai appris le C# à travers la création de jeux vidéos sur Unity. Quand à Python, je l\'utilise principalement pour des projets d\'automatisation avec Selenium, et également pour d\'autres scripts. Au cours de mon DUT, j\'ai pu renforcer fortement ma maîtrise de tous ces langages en les pratiquant quotidiennement, notamment Python et Java.<br><br>Je suis à la recherche d\'un stage informatique rémunéré de minimum 10 semaines à partir du 13 Juin 2022 afin de valider ma formation. Je suis également à la recherche d\'une alternance en informatique dans le domaine de la cybersécurité pour l\'année 2022/2023. Mon CV est disponible <a href="otherfiles/cv_htncf.pdf" target="_blank">içi</a>.<br><br>Parmis mes centres d\'intérêts se trouvent l\'informatique, les jeux vidéos, les échecs et la politique. Je m\'intéresse particulièrement aux nouvelles technologies du domaine de l\'informatique, comme la blockchain ou l\'intelligence artificielle.', "Toutes les informations sensibles ont été cachées. Vous pouvez cliquer sur une image pour l'agrandir.", "", "Ce site internet est toujours en ligne, et va être mis à jour. Les deux dernières images représentent la dernière version du site. Il est utilisé pour promouvoir une activité.", "", "Ce site internet n'est plus en ligne. Il était utilisé pour promouvoir une association.", "", 'Ce jeu est en cours de développement. Le gif donne une impression de lag mais le jeu est bien stable à 60fps sur mobile. Les méchaniques de jeu marchent très bien, la plupart du travail restant concerne l\'UI (l\'interface utilisateur) et les graphismes. Si vous voulez essayer, vous pouvez télécharger le fichier .apk pour Android <a href="otherfiles/Evade!_0.3.apk">içi</a>.', '', 'Ce jeu est un projet de groupe, où nous devions utiliser PHP, SQL and JavaScript. Nous avons décidé de faire un jeu simple où l\'on doit esquiver des obstacles. Nous stockons les scores dans une base de données MySql gratutie et on les affiche dans un tableau. Vous pouvez jouez en ligne maintenant <a href="https://baele.fr/Projet">içi</a>.', 'N\'hésitez pas à me contacter. Vous pouvez m\'envoyer un mail à l\'adresse htncf@protonmail.com.'];

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
