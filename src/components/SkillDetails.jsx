import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function SkillDetails() {
  const [data, setData] = useState(null);
  const { title } = useParams();
  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const selectedSkill = data?.skills
    .flatMap((category) => category.items)
    .find((item) => item.title === title);

  return (
    <>
      <Header title={selectedSkill?.title} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <div style={styles.contentContainer}>
                <Col style={styles.introTextContainer}>
                  <div dangerouslySetInnerHTML={
                    { __html: selectedSkill.details[0].definition }
                  }
                  />
                  <br />
                  <div style={styles.images}>
                    <img src={`images/skills/${selectedSkill.title}/1.jpg`} alt="1" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedSkill.details[0].preuves }
                  }
                  />
                  <br />
                  <div style={styles.images}>
                    <img src={`images/skills/${selectedSkill.title}/2.jpg`} alt="2" style={{ maxWidth: '50%', height: 'auto' }} />
                    <img src={`images/skills/${selectedSkill.title}/3.jpg`} alt="3" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedSkill.details[0].critique }
                  }
                  />
                  <br />
                  <div style={styles.images}>
                    <img src={`images/skills/${selectedSkill.title}/4.jpg`} alt="4" style={{ maxWidth: '50%', height: 'auto' }} />
                  </div>
                  <br />
                  <div dangerouslySetInnerHTML={
                    { __html: selectedSkill.details[0].evolution }
                  }
                  />
                </Col>
                <h2 style={{ margin: '50px 0' }}>Réalisations associées</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selectedSkill.projects.map((tag) => (
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
                      <a href={`./#/projectdetails/${tag}`} style={styles.linkStyle}>{tag}</a>
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

export default SkillDetails;
