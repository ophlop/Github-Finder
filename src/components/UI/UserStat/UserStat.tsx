import { localGithubUser } from "../../types";

interface IUserStat extends Pick<
    localGithubUser,
    'repos' | 'followers' | 'following'
> {}

export const UserStat = ({repos, followers, following}: IUserStat) => (
    <div className="bg-slate-100 text-gray-600 px-4 py-8 grid grid-cols-3 mt-4 rounded-xl">
        <div className="flex flex-col gap-2">
            <div className="text-gray-400 text-xs">Repos</div>
            <div className="text-xl text-bold">{repos}</div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="text-gray-400 text-xs">Followers</div>
            <div className="text-xl text-bold">{followers}</div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="text-gray-400 text-xs">Following</div>
            <div className="text-xl text-bold">{following}</div>
        </div>
    </div>
)