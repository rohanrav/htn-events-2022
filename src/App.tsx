import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { User } from "./user";

const App: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null); // on login, set setUser to default user if login credienticals match
  return (
    <>
      <NavBar isLoggedIn={true} events={[]} user={user} />
    </>
  );
};

export default App;
