import { useState } from 'react';

import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

function App() {
  const [show, setShow] = useState(false);

  function handleShowAddFriend() {
    setShow((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {show && <FormAddFriend />}
        <Button onToggle={handleShowAddFriend}>{show ? 'Close' : 'Add friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
