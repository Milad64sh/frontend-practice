import HelloWorldButton from './components/hello-world-btn/hello-world-button.js';

import Heading from './components/heading/heading.js';
const button = new HelloWorldButton();
const heading = new Heading();

heading.render(_.upperFirst('hello world'));
button.render();
