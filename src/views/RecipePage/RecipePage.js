import React from 'react';
import Box from '../../components/Box';
import { Helmet } from 'react-helmet';

function RecipePage() {
  return (
    <div>
      <Helmet>
        <title>Recipe</title>
      </Helmet>
      <Box
        withTitle
        title="Recipe"
        size="xlarge"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt quam id odio pellentesque, imperdiet molestie justo maximus. Praesent ut viverra leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus enim lectus, scelerisque id ornare non, vestibulum id lacus. Nulla faucibus sagittis elit vel blandit. Donec ac libero quis neque 
      </Box>
    </div>
  );
}

export default RecipePage;
