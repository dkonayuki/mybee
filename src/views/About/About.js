import React from 'react';
import Box from '../../components/Box';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Box
        withTitle
        title="About"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt quam id odio pellentesque, imperdiet molestie justo maximus. Praesent ut viverra leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus enim lectus, scelerisque id ornare non, vestibulum id lacus. Nulla faucibus sagittis elit vel blandit. Donec ac libero quis neque sagittis fringilla sed vitae elit. Vestibulum lobortis lacinia sem, eu consectetur lorem consequat cursus. Fusce viverra, nibh a porttitor faucibus, ex nibh sollicitudin dui, quis elementum lacus magna sit amet urna. Pellentesque at nisi fermentum, viverra eros ut, hendrerit est. Sed ligula metus, tempus sit amet suscipit eget, consequat vitae felis. Phasellus vulputate sem ac libero sodales gravida. Nulla gravida erat non erat facilisis, sit amet facilisis lorem venenatis.</p>
        <br />
        <p>In semper neque sed nisl porta, non vulputate ante laoreet. Pellentesque metus nibh, elementum in commodo quis, condimentum in nisi. Suspendisse potenti. Proin quis purus imperdiet, pellentesque nulla id, luctus purus. Nulla facilisi. Sed tincidunt sodales leo, sit amet ultrices ligula elementum ac. In sit amet massa nec nisi euismod ultrices et molestie neque. Proin consequat convallis ex, non eleifend nulla sodales eu. Nullam et convallis tellus, in suscipit sem.</p>
        <br />
        <p>Maecenas at pharetra erat. Morbi sed congue enim. Nam bibendum magna sed ligula egestas, quis elementum metus lobortis. Maecenas a dignissim magna. Proin non pellentesque enim. Nulla facilisi. Maecenas mollis accumsan odio id ultrices. Etiam non neque in purus dignissim finibus. Nulla dignissim, magna eget viverra gravida, magna erat efficitur ligula, vitae semper ipsum tellus a purus. Curabitur pharetra enim non nibh condimentum, eget vulputate dolor efficitur. Fusce ac dolor egestas, placerat nisl fringilla, ultricies mi. Phasellus fringilla convallis ex, vitae ornare metus.</p>
      </Box>
    </div>
  );
}

export default About;
