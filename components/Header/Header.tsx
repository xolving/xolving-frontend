'use client';

import Link from 'next/link';

import { CarbonLogoDiscord, GrommetIconsGithub } from '../Icons';
import HeaderIcon from './Header-Icon';

export function NavigationMenuDemo() {
  return (
    <header className="flex px-36 py-4 items-center">
      <Link href={'/'}>
        <HeaderIcon width={105} height={35} />
      </Link>
      <div className="ml-auto flex gap-x-2">
        <Link href={'https://discord.gg/36tCw3kYuJ'}>
          <CarbonLogoDiscord scope={25} />
        </Link>
        <Link href={'https://github.com/xolving'}>
          <GrommetIconsGithub scope={25} />
        </Link>
      </div>
    </header>
  );
}
