// Importer les images ici
import post from "../assets/projects/post.png";
import movieflix from "../assets/projects/movieflix.png";
import obsstjean from "../assets/projects/obsstjean.png";
import lumios from "../assets/projects/lumios.png";
import marcofolioDark from "../assets/projects/marcofolioDark.png";
import marcofolioLight from "../assets/projects/marcofolioLight.png";

const portfolioDatas = [
  {
    titre: "Lumios",
    image: lumios,
    lien: "https://github.com/WildCodeSchool/2022-03-JS-RemoteFR-TeamKarma-P3-Lumios",
    descriptionFR:
      "Aboutissement de ma formation, le projet professionel Lumios avait pour but d'apporter une solution à un porteur de projet en suivant un plan de charge. C'était pour nous l'occasion d'utiliser toutes nos connaissances acquises durant le bootcamp afin de pouvoir devenir développeur Full Stack.",
    descriptionEN:
      "This is my last professional project at the Wild Code School! We had a business plan to follow. It is a syntesis of what we learned during our bootcamp to be a full stack developer.  ",
    github: "https:github.com/moumax/",
    techno1: "ReactJs",
    techno2: "d3js",
    techno3: "Sass",
    techno4: "mysql",
    techno5: "NodeJs",
  },
  {
    titre: "Marcofolio",
    imageLight: marcofolioDark,
    imageDark: marcofolioLight,
    lien: "https://marcofoliov2.vercel.app/",
    descriptionFR:
      "Mon portfolio qui à pour but de me suivre durant ma carrière de développeur web. Je souhaite pouvoir le mettre à jour régulièrement.",
    descriptionEN:
      "This is my portfolio. This website aims to follow my journey of web developer. I will update him regularlty",
    github: "https:github.com/moumax/marcofoliov2",
    techno1: "ReactJs",
    techno2: "TailwindCss",
  },
  {
    titre: "The wild post",
    image: post,
    lien: "https://clemdsc.github.io/",
    descriptionFR:
      "Premier projet de ma formation à la Wild Code School, \"The wild post\" est une page statique en Html et Css. Il s'agissait de présenter nos premiers pas d'élèves à travers un journal",
    github: "https:github.com/moumax/",
    descriptionEN:
      'First project of my bootcamp, "The wild post" is a single page website developed with Html and Css only. The purpose of this site was to show somes pieces of our journey at the Wild Code School.',
    techno1: "Html",
    techno2: "Css",
  },
  {
    titre: "Movieflix",
    image: movieflix,
    lien: "https://project-2-teamkarma-tigers.netlify.app/",
    descriptionFR:
      'Second projet, "MovieFlix" nous à permis de découvrir React, ainsi que l\'utilisation des Api à distance. La récupération des données nous à permis de créer quelques outils de requêtes.',
    github: "https:github.com/moumax/",
    descriptionEN:
      "This second bootcamp project introduces us to React. We choose to use a movie API which is very popular. We had to fetch some datas and show them with some tools.",
    techno1: "Html",
    techno2: "Css",
    techno3: "ReactJs",
    techno4: "ChakraUi",
  },
  {
    titre: "Obsstjean",
    image: obsstjean,
    lien: "https://obsstjean.fr/",
    descriptionFR:
      "L'association à laquelle j'appartiens, l'observatoire astronomique de Saint Jean Le Blanc avait besoin d'un nouveau site web. Il y'a 3 ans, j'ai donc fait mes premiers pas en développement web! ",
    descriptionEN:
      "This website show my first real steps in web development. It is about an association (where i'am a member and president) who promote astronomy and astrophotography",
    github: "https:github.com/moumax/",
    techno1: "Html",
    techno2: "Css",
    techno3: "Javascript",
  },
];

export default portfolioDatas;
