import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// import Home from './pages/home';
import { BrowserRouter } from "react-router-dom";
// import Order from './pages/order';
// import Layout from './App';
// import NoPage from './pages/nopage';
// export default function App() {
//   return (
//     <BrowserRouter>
 
//       <Routes>
//           <Route path="/" elements={<Layout/>}>
//             <Route index element={<Home />} />
//             <Route path="/order" elements={<Order/>}/>
//             <Route path="*" element={<NoPage />} />
//           </Route>
//       </Routes>
   
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

