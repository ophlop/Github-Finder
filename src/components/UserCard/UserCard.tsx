import { UserStat } from '../UI/UserStat/UserStat'
import { UserTitle } from '../UI/UserTitle/UserTitle'
import { localGithubUser } from "../types/user"

interface IUserCard extends localGithubUser { }



export const UserCard = (props: IUserCard) => (
        <div className='grid mt-6 mx-0 mb-12 w-full pt-[30px] px-6 pb-10 bg-white rounded-2xl grid-cols-[200px,_auto] gap-x-8'>
            <img src={props.avatar}
                alt={props.login}
                className="grid colums-1 row-1 rounded-[50%] max-w-[100%]"
            />
            <div className='grid-span-2 row-span-1'>
                <UserTitle
                    name={props.name}
                    login={props.login}
                    created={props.created}
                />
                <p className='text-base font-medium text-gray-400 '>
                    {props.bio || 'This profile has no bio.'}
                </p>
                <UserStat
                    repos={props.repos}
                    followers={props.followers}
                    following={props.following}
                />
            </div>
        </div>
)