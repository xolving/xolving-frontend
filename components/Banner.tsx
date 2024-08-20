import Image from 'next/image';

export default function Banner() {
  return (
    <Image
      className="w-full"
      src="/banner.png"
      alt="banner"
      width={240}
      height={60}
    />
  );
}
