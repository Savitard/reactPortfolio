import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
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
  const selectedProject = data?.projects.find((project) => project.title === title);
  return (
    <>
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <p>{selectedProject.bodyText}</p>
            </Container>
          </div>
        ) : <FallbackSpinner />}
    </>
  );
}

export default ProjectDetails;
