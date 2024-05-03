import Link from 'next/link';
import Image from 'next/image';

export function LogoLink() {
  return (
    <>
      <div className="text-center sm:mb-0 lg:pt-1 lg:mt-1 lg:pl-5 lg:ml-5">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/logo-health-care-blue.svg" alt="logo" width={25} height={10} />
            <span className="logo-1">Fueguinos<span className="logo-2">.io</span></span>
          </div>
        </Link>
      </div>

    </>
  );
}
