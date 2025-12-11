import Greeting from './Greeting';
import { WelcomeMessage, GoodbyeMessage } from './Messages';

function App() {
  return (
    <div>
      <h1>Root Component File</h1>
      <Greeting />
      <WelcomeMessage />
      <GoodbyeMessage />
    </div>
  );
}

export default App;