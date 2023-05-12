import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenidos al Himalaya!!!</h1>
      <button>
        <Link to={'/home'}>Ingresar</Link> </button>
    </div>
  )
};

export default LandingPage;