import Button from "./Button";
import { GoBell,GoBlocked,GoCalendar } from 'react-icons/go'

function App() {

  const handleClick =()=>{
    console.log('Click!!');
  }
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}><GoBell/>click me</Button>
      </div>
      <div>
        <Button secondary outline rounded onClick={handleClick} onMouseEnter={handleClick}><GoBlocked/>buy now</Button>
      </div>
      <div>
        <Button primary onMouseLeave={handleClick}><GoCalendar/>hide me</Button>
      </div>
      <div>
        <Button secondary>don don</Button>
      </div>
      <div>
        <Button rounded>god god</Button>
      </div>
    </div>
  );
}

export default App;
