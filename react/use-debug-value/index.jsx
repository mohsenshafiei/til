import React from "react";

const Component = () => {
  // useDebugValue can be used to display a label for custom hooks in React DevTools.
  const useFriendStatus = (friendID) => {
    const [isOnline, setIsOnline] = useState(null);
    // Show a label in DevTools next to this Hook
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? "Online" : "Offline");
    return isOnline;
  };

  const useEnemyStatus = (enemyId) => {
    const [isOnline, setIsOnline] = useState(null);
    // useDebugValue accepts a formatting function as an optional second parameter.
    // This function is only called if the Hooks are inspected.
    useDebugValue(enemyId, (enemyId) => enemyId.toDateString());
  };

  return <div>Component With Custom Hook</div>;
};
