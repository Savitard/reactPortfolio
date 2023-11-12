import React, { useEffect, useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const styles = {
    iconStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
    },
    btnStyle: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.socialIconBgColor, // Use theme color
      color: theme.socialIconColor, // Use theme color
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '30px',
    },
  };

  return (
    <>
      <a href="#/about" style={styles.btnStyle}>En savoir plus sur moi</a>
      <div className="social">
        {data ? data.social.map((social) => (
          <SocialIcon
            key={social.network}
            style={styles.iconStyle}
            url={social.href}
            network={social.network}
            bgColor={theme.socialIconBgColor}
            target="_blank"
            rel="noopener"
          />
        )) : null}
      </div>
    </>
  );
}

export default Social;
