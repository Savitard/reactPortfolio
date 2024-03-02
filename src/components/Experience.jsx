import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Tooltip } from 'react-tooltip';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
    width: 600,
  },
  iconStyle: {
    height: 75,
    width: 200,
    margin: 10,
    marginBottom: 50,
  },
  noClicStyle: {
    pointerEvents: 'none',
  },
  tooltip: {
    maxWidth: 400,
  },
};

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <Timeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item, index) => (
                  <TimelineItem
                    key={item.title + item.dateText}
                    dateText={item.dateText}
                    dateInnerStyle={{ background: theme.accentColor }}
                    style={styles.itemStyle}
                    bodyContainerStyle={{ color: theme.color }}
                  >
                    <h2
                      className="item-title"
                    // onMouseEnter={handleOpen}
                    // onMouseLeave={handleClose}
                    >
                      {item.title}

                    </h2>
                    <div style={styles.subtitleContainerStyle}>
                      <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                        {item.subtitle}
                      </h4>
                      {item.workType && (
                        <h5 style={styles.inlineChild}>
                          &nbsp;·
                          {' '}
                          {item.workType}
                        </h5>
                      )}
                    </div>
                    <ul style={styles.ulStyle}>
                      {item.workDescription.map((point) => (
                        <div key={point}>
                          <li>
                            <ReactMarkdown
                              children={point}
                              components={{
                                p: 'span',
                              }}
                            />
                          </li>
                          <br />
                        </div>
                      ))}
                    </ul>
                    <ul style={styles.ulStyle}>
                      <button type="button" id={`popup${index}`}>Plus de détails</button>
                      <Tooltip anchorSelect={`#popup${index}`} place="right" animateFill={false} delayShow={200} style={styles.tooltip} html={item.details} />
                    </ul>
                    {item.href !== null ? (
                      <a href={item.href}><img src={item.logo} alt="logo" style={styles.iconStyle} /></a>
                    ) : (
                      <img src={item.logo} alt="logo" style={styles.iconStyle} />
                    )}
                  </TimelineItem>
                ))}
              </Timeline>
            </Container>
          </div>
        ) : <FallbackSpinner />}
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;
