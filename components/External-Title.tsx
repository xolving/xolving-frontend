import Link from 'next/link';
import { IcRoundNavigateNext } from './Icons';

export default function ExternalTitle({
  children,
  href,
}: {
  children: any;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-0 hover:gap-x-3 mb-2 duration-300"
    >
      <h1 className="text-lg font-semibold">{children}</h1>
      <IcRoundNavigateNext scope={25} />
    </Link>
  );
}
