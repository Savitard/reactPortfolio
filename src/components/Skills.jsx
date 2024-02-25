import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 40,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
  cardDescription: {
    textAlign: 'center',
    border: '5px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const history = useHistory();

  const redirectToSkillDetails = (skillTitle) => {
    history.push(`/skilldetails/${skillTitle}`);
  };
  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container" style={{ flexGrow: 0 }}>
            <Container>
              <img src="images/skills/niveaux.jpg" alt="niveau" />
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <button
                      type="button"
                      onClick={() => redirectToSkillDetails(item.title)}
                      style={{ margin: '10px', backgroundColor: '#9e9e9e' }}
                    >
                      <div key={item.title} style={{ display: 'inline-block' }}>
                        <img
                          style={styles.iconStyle}
                          src={item.icon}
                          alt={item.title}
                        />
                        <p>{item.title}</p>
                        <div style={styles.cardDescription}>
                          <p>{item.niveau}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
