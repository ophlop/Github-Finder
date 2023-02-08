import { UserStat } from '../UI/UserStat/UserStat'
import { localGithubUser } from "../types/user"

interface IUserCard extends localGithubUser { }

export const UserCard = (props: IUserCard) => (
    <div>
        <UserStat
            repos={props.repos}
            followers={props.followers}
            following={props.following}
        />
    </div>
)