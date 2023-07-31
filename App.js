
// creating a react element always creates a js object 
// while rendering on to the dom it gets converted to html
const heading = React.createElement('h1', {id:'heading'}, 'helloo world');  // core react  
// here heading is a JS object -->{props,children,type...}


// react needs a root (here div) to perform all DOM stuff and react Dom is responsible for that
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);  // render method is converting the object to h1 tag


// div inside div
const parent = React.createElement('div',{id:'parent'},
   React.createElement('div',{id:'child'},'hay'))


// root.render replaces all the old stuff present in root with parent   
root.render(parent); 
console.log(parent);