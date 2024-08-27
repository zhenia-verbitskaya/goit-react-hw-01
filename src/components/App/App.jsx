// import css from "./App.module.css";
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App;
