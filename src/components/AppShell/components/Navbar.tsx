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
            <div className="bg-white shadow h-20 w-full flex items-center justify-center px-8 space-x-12">
                <Logo />
                <div className="md:flex hidden items-center space-x-8">
                    {navigations.map((nav) =>
                        <div
                            className="flex flex-col items-center"
                            key={nav.label}
                        >

                            <div className="text-sm text-neutral-900 cursor-default">
                                {nav.label}
                            </div>
                        </div>
                    )}
                    <Button label={'Get in Touch'} className='bg-neutral-800 text-sm text-white hover:bg-blue-500' variant={Variant.Primary} size={Size.Large} />
                </div>

                {/* Mobile Nav*/}
                <div>
                    {navigations.map((nav) =>
                        <div
                            className=""
                            key={nav.label}
                        >
                            <div className="text-sm text-neutral-900 cursor-default">
                                {nav.label}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
