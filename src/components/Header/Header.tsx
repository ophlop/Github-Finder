import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Header = () => (
    <header className="mx-0 my-3 flex justify-between items-center">
        <h3 className="text-gray-400 dark:text-white text-3xl bold">findYourDev</h3>
        <ThemeSwitcher />
    </header>
);