import Profile from './Profile/profile';
import './App.css';

function App() {
  const handleName = e => {
    e.preventDefault();
    alert("Houssem Hosni");
  };

  return (
    <div className="App" style={{backgroundColor:"ButtonHighlight",padding:20,textAlign:"center"}}>
      <Profile hnf={handleName} name="Houssem Hosni" bio="I am a full-stack Developer, " profession="Web developer">/hoss.jpg</Profile>
    </div>
  );
}

export default App;