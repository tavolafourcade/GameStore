import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-grey-neutral flex py-16  justify-center">
      <Link href="/">
        <Image
          src={"/assets/images/logo.png"}
          alt="logo"
          width={170}
          height={44.09}
          className="cursor-pointer"
        />
      </Link>
      
    </div>
  );
};

export default Footer;
