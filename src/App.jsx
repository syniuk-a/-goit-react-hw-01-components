import { User } from './components/Profile/Profile';
import user from './data/user.json';

export const App = () => {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
