import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import { Container, Col } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  images: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center', // Pour centrer horizontalement
    alignItems: 'center', // Pour centrer verticalement
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    margin: '10px',
  },
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'justify',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  linkStyle: {
    margin: 30,
    fontSize: 30,
  },
};

function ProjectDetails() {
  const [data, setData] = useState(null);
  const { title } = useParams();
  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  // const parseIntro = (text) => (
  //   <ReactMarkdown
  //     children={text}
  //   />
  // );

  const selectedProject = data?.projects.find((project) => project.title === title);
  return (
    <>
      <Header title={selectedProject?.title} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <div style={styles.contentContainer}>
                <Col style={styles.introTextContainer}>
                  <h1>Présentation</h1>
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].presentation }
                  }
                  />
                  <br />
                  <div style={styles.images}>
                    <img src={`images/projects/${selectedProject.title}/1.jpg`} alt="1" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <h1>Réalisation</h1>
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].objectifs }
                  }
                  />
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].etapes }
                  }
                  />
                  <br />
                  <div style={styles.images}>
                    <img src={`images/projects/${selectedProject.title}/2.jpg`} alt="2" style={{ maxWidth: '50%', height: 'auto', marginRight: '50px' }} />
                    <img src={`images/projects/${selectedProject.title}/3.jpg`} alt="3" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <h1>Résultats</h1>
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].acteurs }
                  }
                  />
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].resultats }
                  }
                  />
                  <br />
                  <div style={styles.images}>
                    <img src={`images/projects/${selectedProject.title}/4.jpg`} alt="4" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].lendemain }
                  }
                  />
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedProject.details[0].critique }
                  }
                  />
                </Col>
                <h2 style={{ margin: '50px 0' }}>Compétences associées</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selectedProject.tags.map((tag) => (
                    <div
                      key={tag}
                      style={{
                        backgroundColor: '#00d084',
                        color: 'white',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        margin: '0',
                        display: 'inline-block',
                        textDecoration: 'none',
                        marginRight: '20px', // Marge à droite pour l'espacement
                      }}
                    >
                      <a href={`./#/skilldetails/${tag}`} style={styles.linkStyle}>{tag}</a>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        ) : <FallbackSpinner />}
    </>
  );
}

export default ProjectDetails;
