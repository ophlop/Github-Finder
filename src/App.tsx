import { useState } from "react";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { GithubError, GithubUser, localGithubUser } from "./components/types";
import { UserCard } from "./components/UserCard/UserCard";
import { defaultUser } from "./mock/index";
import { extractLocalUser } from "./utils/extrac_local_user";
import { isGithubUser } from "./utils/type_guards";

const urlFetch = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<localGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = urlFetch + username;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <div>
      <Container>
        <Header />
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
      </Container>
    </div>
  );
}

export default App;
