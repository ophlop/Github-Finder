import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import { Button } from '../UI/Button/Button';

interface ISearch {
    hasError: boolean,
    onSubmit: (text: string) => void,
}

type FormFields = {
    username: HTMLInputElement,
}

export const Search = ({hasError, onSubmit}: ISearch) => {


const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()
    const text = event.currentTarget.username.value;
        
    if (text) {
        onSubmit(text);
        event.currentTarget.reset();
    }
}
    
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='relative w-full h-[70px] mt-[30px] overflow-hidden pl-8 pr-8 bg-white flex items-center rounded-2xl md:pr-8 sm:w-full'>
                <label htmlFor="" className='cursor-pointer'><SearchIcon /></label>
                    <input
                        name='username'
                        type="text"
                        className='px-3 py-0 grow-[5] w-[calc(100% - 120px)] cursor-pointer
                                 placeholder:text-gray-200 focus:outline-none
                                   md:mx-1 md:my-0 md:text-xl'
                        id='searchDev'
                        placeholder='Search Github users...'
                    />
                    { hasError && (
                        <div className='absolute right-[150px] bottom-1 text-red-400 text-base font-bold
                                        md:top-1/2 md:bottom-unset md:-translate-y-1/2'>
                            No result
                        </div>
                    )}
                    <Button>Search</Button>
            </div>
        </form>
    )
}