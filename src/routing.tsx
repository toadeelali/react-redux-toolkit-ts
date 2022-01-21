import { Routes, Route } from 'react-router-dom';

import CustomHooks from './custom/custom-hooks';
import ExamplePage from './counter/example';
import RtkqHooks from './rtkq/rtkq-hooks';


export function Routs(){
  return (
    <Routes>
      <Route path="/" element={<CustomHooks />} />
      <Route path="/rtkq" element={<RtkqHooks />} />
      <Route path="/example" element={<ExamplePage />} />
    </Routes>
  );
} 