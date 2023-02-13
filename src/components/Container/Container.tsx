import { ReactNode } from 'react'

interface IContainer {
    children: ReactNode,
}

export const Container = ({children}: IContainer) => (
    <div className='lg:w-6/12 h-fit py-0 px-6  md:p-0 md:my-0 md:mx-auto md:w-10/12 sm:w-12'>
        {children}
    </div>
);