import { Routs } from './routing';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className="container mx-auto">
      <header className='border-b border-0 border-solid border-gray-600 py-8 mb-6'>
        <Link color="inherit" to="/">
          Custom
        </Link>
        {' '}|{' '}
        <Link color="inherit" to="/rtkq">
          Redux TKQ
        </Link>
        {' '}|{' '}
        <Link color="inherit" to="/example">
          Redux toolkit example
        </Link>
      </header>
      <Routs />
    </main>
  );
}

export default App;
