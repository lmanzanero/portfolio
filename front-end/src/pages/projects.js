import React, { useState, useEffect }from 'react';  
import SEO from "../components/seo"
import Layout from '../layouts/layout';  
import useGetProjects from '../services/hooks/useProjectsHook';


const Projects = () =>{
  const [projectsData, setProjectData] = useState([]);
  const { data, status, isloading, error } = useGetProjects('https://lmanzanero.herokuapp.com/projects');
  console.log(data, status, isloading, error);
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/photos/?albumId=1')
      .then(response => response.json())
      .then(json => setProjectData(json));
      }, []);

  // const onClickItem = (e) => { 
  //   const options = document.querySelectorAll('.option'); 
  //   options.forEach(option => { 
  //     option.classList.remove('active');
  //   });
  //   e.target.classList.add('active');
  // }

  return (
    <Layout>
        <SEO 
            title="Projects"
            description="Here is a collection of many of the projects that I have worked on."
        /> 
        <div className="page">
          <h1>My Recent Work</h1>
          <div className="projects-options">
                <ul>
                  <li><a className="option active" href="#all" rel="noreferrer">All</a></li>
                  <li><a className="option" href="#web-design" rel="noreferrer">Web Design</a></li>
                  <li><a className="option" href="#mobile-development" rel="noreferrer">Mobile Development</a></li>
                  <li><a className="option" href="#videos" rel="noreferrer">Videos</a></li>
                  <li><a className="option" href="#music" rel="noreferrer">Music</a></li>   
                </ul>
          </div>
          <div className="project-items">
            {
             isloading ? 'loading...' : projectsData.map(project => (
                <div key={project.id} className="project-item">
                    <img alt="" src={project.thumbnailUrl}/>
                    <div className="project-inner">
                     <div className="title">{project.title}</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href={project.url} target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </Layout>
  );
}

export default Projects;
