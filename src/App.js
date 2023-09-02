import './App.css';
import { TwitterCard } from './componentes/TwitterCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true,
  },
  {
    userName: 'nicopetcoff',
    name: 'Nicolas Petcoff',
    isFollowing: false,
    },
  {
    userName: 'pedoMichelo',
    name: 'Pedro Michel',
    isFollowing: false, 
  },
  {
    useState: 'pepe', 
    name: 'Pepe Perez',
    isFollowing: true,
  }
];

function App() {

  return (
    <section className="App">
      {
        users.map (user => {
          
          const {userName, name, isFollowing} = user;

          return(
            <TwitterCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
                {name}
              </TwitterCard>
          )        
        })
      }
    </section>
  );
}

export default App;
