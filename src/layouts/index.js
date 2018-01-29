import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Container';
import './index.css';
import { colors } from '../style-vars';

const MainContainer = styled.div`
  background-color: ${colors.offWhite};
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SF Video Technology"
      meta={[
        { name: 'description', content: 'SF Video Technology meetup' },
        { name: 'keywords', content: 'meetup, SF Video' },
      ]}
    />
    <Header />
    <div>
      <Container>
        {children()}
      </Container>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
