import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/vision.png"
          className="sm:h-14 h-9"
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight">
          ai.vutn.net
        </h1>
      </Link>
      <a
        href="https://ai.vutn.net"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="VUTN.net Icon"
          src="/vutn.net01.png"
          className="sm:h-[34px] h-[36px]"
          height={36}
        />
      </a>
    </header>
  );
}
