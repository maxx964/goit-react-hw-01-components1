
import React from 'react';

import Profile from './Profile';
import user from '../databases/user';

import Statistics from './Statistics';
import statsData from '../databases/statsData';

import FriendList from './FriendList';
import friendsData from '../databases/friendsData';

import TransactionHistory from './TransactionHistory';
import transactionsData from '../databases/transactionsData';





function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
              stats={user.stats}
          />
          
          <Statistics title="Upload stats" stats={statsData} />
        <FriendList friends={friendsData} />
         <TransactionHistory items={transactionsData} /> 


          </div>
  );
}

      export default App;










































































// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework templat ne
//     </div>
//   );
// };
