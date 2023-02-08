import { localGithubUser } from "../../types";

interface IUserTitle extends Pick<
    localGithubUser,
    'name' | 'login' | 'created'
> {}

const localDate = new Intl.DateTimeFormat('en-EG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

export const UserTitle = ({created, login, name}: IUserTitle) => {
    
    const joinDate = localDate.format(new Date(created))
    
    return (
        <div className="grid gap-x-[2px] gap-y-[10px] grid-cols-[auto,_auto] h-[100px]">
            <div className="row-span-1">
                <h2 className="text-base font-bold text-gray-800 md:text-2xl">{name}</h2>
                <h3 className="text-xs mt-[6px] text-[#0079ff] md:text-base">@{login}</h3>
            </div>
            <div className="grid-span-2 justify-self-end">
                <span className="flex text-gray-400 text-xs mt-[6px] md:text-base ">Joined: {joinDate}</span>
            </div>
        </div>
    )
}