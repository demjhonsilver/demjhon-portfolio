import { Route, Routes } from 'react-router-dom';
import { Home } from '../contents/Home';
/* import { Blog } from '../contents/Blog'; */

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
    </Routes>
  );
};
