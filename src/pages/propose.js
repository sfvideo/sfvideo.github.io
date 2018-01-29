import React from 'react';
import styled from 'styled-components';

const StyledFrame = styled.iframe`
  background: transparent;
  border: 1px solid #ccc;
`;

const Propose = () => (
  <StyledFrame src="https://airtable.com/embed/shrVeg3DuzUhPiKd5?backgroundColor=red" frameBorder="0" width="100%" height="600px" />
);

export default Propose;
