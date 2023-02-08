import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { UserCard } from './components/UserCard/UserCard';

import { defaultUser } from './mock/index'

function App() {
  return (
    <div>
        <Container>
          <Header />
          <Search hasError onSubmit={() => {}}/>
          <UserCard
            {...defaultUser}
          />
        </Container>
    </div>
  );
}

export default App;
