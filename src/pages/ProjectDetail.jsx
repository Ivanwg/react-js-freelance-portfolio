import { useParams } from "react-router";
import { projectsArr } from "../helpers/projectsList";
import GitHubBtn from "../сomponents/gitHubBtn/GitHubBtn";



function ProjectDetail() {
  const {slug} = useParams();
  const targetObj = projectsArr.find(obj => obj.slug === slug);
  const {imgBigSrc, title, skills, gitHub} = targetObj;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{title}</h1>

          <img src={imgBigSrc} alt="" className="project-details__cover" />

            <div className="project-details__desc">
              <p>Skills: {skills}</p>
            </div>

            {gitHub && 
              <GitHubBtn gitHubHref={gitHub} />
            }

        </div>
      </div>
    </main>
  );
}

export default ProjectDetail;