Q. How to get react into our project (without create react app) using JS  ??
one way of getting react is using CDN .

CDN : A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos. A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

React is hosted on cdn servers and we can bring it into our project using cdn links :
     (these are only on development, production also has different cdn links)
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     React and ReactDOM are available over a CDN
     The crossorigin content attribute on media elements is a CORS settings attribute.

    creating a react element
    <script>
          
            // creating a react element always creates a js object 
            // while rendering on to the dom it gets converted to html
           const heading=React.createElement('h1',{},'helloo world');  // core react 
           
           // react needs a root (here div) to perform all DOM stuff and react Dom is responsible for that
           const root = ReactDOM.createRoot(document.getElementById('root'));
            
           // root.render replaces all the old stuff present in root with parent   
           root.render(heading);
    </script>


React is a library as can work in a particuler section (header/footer/..) only and other stuff can work as it is (not a framwork)






