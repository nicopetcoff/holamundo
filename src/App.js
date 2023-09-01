import './App.css';
import { TwitterCard } from './componentes/TwitterCard';



function App() {
  return (
    <div className="App">
      <TwitterCard isFollowing={true} userName="midudev" name="mindudev"/>
      <TwitterCard isFollowing={false} userName="midudev" name="mindudev"/>
    </div>
  );
}

export default App;
