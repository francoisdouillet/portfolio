import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Network = () => {
  return (
    <div className="network">
        <a href="https://github.com/francoisdouillet" target='blank'><GitHubIcon fontSize='large'/></a>
        <a href="https://www.linkedin.com/in/francoisdouillet/" target='blank'><LinkedInIcon fontSize='large'/></a>
    </div>
  );
};

export default Network
