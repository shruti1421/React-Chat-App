import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'bc3f036a-4cf8-40dd-acef-f00d6a0768ca';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}

      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
