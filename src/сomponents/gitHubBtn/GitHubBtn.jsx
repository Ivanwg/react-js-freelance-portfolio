import gitHubIcon from './img/gitHub-black.svg';
import './style.css';

function GitHubBtn({gitHubHref}) {
  const isHref = gitHubHref && gitHubHref.length;
  return (
    <a href={isHref ? gitHubHref : '#!'} target={isHref ? '_blank' : '_self'} rel='noreferrer noopener' className='btn-outline'>
      <img src={gitHubIcon} alt='' />
      GitHub repo
    </a>
  );
}

export default GitHubBtn;