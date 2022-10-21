import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Counter />
  </React.StrictMode>
);

// export default function HelloReact() {
//     return (
       
//     );
// }

// if (document.getElementById('hello-react')) {
//     ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
// }