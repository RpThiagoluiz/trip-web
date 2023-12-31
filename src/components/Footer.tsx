import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
      <Image src="/logo.png" width={133} height={23} alt="Trips" />
      <p className="text-sm font-medium mt-1 text-primaryDarker">
        All Copyright
      </p>
    </div>
  );
}
