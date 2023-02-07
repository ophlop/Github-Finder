import { useRef } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import { Button } from '../UI/Button/Button';

interface ISearch {
    hasError: boolean,
    onSubmit: (text: string) => void,
}

export const Search = ({hasError, onSubmit}: ISearch) => {
    const searchRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {}
    
    return (
        <form onSubmit={handleSubmit} ref={searchRef} autoComplete='off'>
            <div className='relative w-full h-[70px] mt-[30px] overflow-hidden px-3 pl-3 pr-4 bg-white flex items-center rounded-2xl md:pr-8'>
                <label htmlFor="" className='cursor-pointer'><SearchIcon /></label>
                    <input
                        name='username'
                        type="text"
                        className='px-3 py-0 grow-[5] max-w-[calc(100% - 120px)] cursor-pointer dark:bg-gray-400
                                 placeholder:text-gray-200 focus:outline-none
                                   md:mx-1 md:my-0 md:text-xl'
                        id='searchDev'
                        placeholder='Search Github users...' />
                    { hasError && (
                        <div className='absolute right-1/2 bottom-1 text-red-400 text-base font-bold
                                        md:right-{120px} md:top-1/2 md:bottom-unset md:-translate-y-1/2'>
                            No result
                        </div>
                    )}
                    <Button>Search</Button>
            </div>
        </form>
    )
}