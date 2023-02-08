import { ReactNode } from 'react'

interface IContainer {
    children: ReactNode,
}

export const Container = ({children}: IContainer) => (
    <div className='w-6/12 h-fit py-0 px-6 md:w-734 md:p-0 md:my-0 md:mx-auto'>
        {children}
    </div>
);