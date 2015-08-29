require('./style/main.scss');

import React from 'react';

const Demo= React.createClass({
   render(){
       return <div>hello world</div>
   } 
});

React.render(<Demo/>, document.body);