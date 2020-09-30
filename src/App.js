import React from 'react';
import ChatBot from 'react-simple-chatbot';
import conversation from "./components/steps"

function App() {
  return (
    <div className="App">
      Hello World
      <ChatBot
        headerTitle="Testing"
        floating="true"
        steps={conversation}
      />
    </div>
  );
}

export default App;
