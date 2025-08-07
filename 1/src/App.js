import ProfileCard from './components/ProfileCard';
import RandomDog from './components/Dataf';
import RandomQuote from './components/RandQ';


function App(){
  return(
    <div>
      <ProfileCard name="Nandhan Rao" title="Frontend Developer" description="Passionate about React and clean code."/>
      <RandomDog/>
      <RandomQuote/>
    </div>
  );
}

export default App;