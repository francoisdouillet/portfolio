import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (
        <div className="home">
            <p>Hello, moi c'est François Douillet j'ai 23 ans. J'ai fait une formation de 6 mois chez Openclassrooms (Developpeur Web) et maintenant je suis à la 3WAcademy en spécialisation React/NodeJS.
            <br/><br/> Je recherche une alternance de 12 mois, afin de poursuivre le développement de mes compétences. Je suis disponible immédiattement sur Laval, Angers et je suis éligible à la prime de 6000 euros. </p>
            <p>Pour me contacter, vous pouvez directement m'envoyer un message sur Linkedin</p>
            <a href="https://www.linkedin.com/in/francoisdouillet/" target='blank'><LinkedInIcon fontSize='large'/></a>
            <a href="https://github.com/francoisdouillet" target='blank'><GitHubIcon fontSize='large'/></a>
        </div>
    )
}

export default About