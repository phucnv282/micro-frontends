import React, { lazy, Suspense } from "react";

const SubAAppLazy = lazy(() => import("./SubAApp"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <h1>This is a host application</h1>
    <hr />
    <SubAAppLazy />
  </Suspense>
);

export default App;
