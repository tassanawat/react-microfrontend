//import React from "react";
import ReactDOM from "react-dom";
import React, { Suspense } from 'react';

/**Load immediately or Preload = true*/
import { Counter } from 'counter/Counter';

/**Lazy load  Fail*/
//const Counter = React.lazy(() => import('counter/Counter'));
 
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </Suspense>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
