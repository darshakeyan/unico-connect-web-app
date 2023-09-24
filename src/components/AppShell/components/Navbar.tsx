import React from 'react';
import { Logo } from 'components/Logo';
import Button, { Size, Variant } from 'components/Button';

const navigations = [
    {
        label: 'Services',
        linkTo: '/services',
    },
    {
        label: 'Hire Developers',
        linkTo: '',
    },
    {
        label: 'Case Study',
        linkTo: '/case-study',
    },
    {
        label: 'Pricing Plan',
        linkTo: '/pricing-plan',

    },
    {
        label: 'No Code Tools',
        linkTo: '/no-code-tools',
    },
    {
        label: 'About Us',
        linkTo: '/about-us',
    },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50">
            <div className="bg-white shadow-lg h-20 w-full flex items-center justify-center px-8 space-x-24">
                <div className='z-50 p-5 md:w-auto w-full'>    
                    <Logo />
                </div>
                <div className="md:flex hidden items-center space-x-6">
                    {navigations.map((nav) =>
                        <div
                        className="flex"
                        key={nav.label}
                        >
                            <div className="text-sm text-neutral-900 cursor-pointer">
                                {nav.label}
                            </div>
                        </div>
                    )}
                    <Button label={'Get in Touch'} className='bg-neutral-800 text-sm text-white hover:bg-blue-500' variant={Variant.Primary} size={Size.Large} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
