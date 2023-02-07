interface IButton {
    children: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: IButton) => (
    <button className="px-5 h-[40px] rounded-xl border-none text-white text-base cursor-pointer bg-[#0079ff] hover:bg-[#116dd6] dark:bg-[rgb(33, 31, 85)] dark:hover:bg-[rgb(33, 31, 85)] md:shrink-0" onClick={onClick}>
        { children }
    </button>
)