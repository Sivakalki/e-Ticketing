// UserContext.js
import React, { createContext,  } from 'react';

const UserContext = createContext();


export default UserContext;
// export const UserProvider = ({ children }) => {
//   const [username, setUsername] = useState('');

//   return (
//     <UserContext.Provider value={{ username, setUsername }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (!context) {
//       throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
//   };