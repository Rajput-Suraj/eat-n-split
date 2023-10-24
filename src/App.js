import { useState } from 'react';

import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {show ? (
          <>
            <FormAddFriend />
          </>
        ) : (
          <></>
        )}
        {show ? (
          <Button onToggle={() => setShow(!show)}>Close</Button>
        ) : (
          <Button onToggle={() => setShow(!show)}>Add friend</Button>
        )}
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
