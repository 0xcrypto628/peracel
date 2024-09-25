import Image from "next/image";

const LogoColored = () => {
  return (
    <Image
      src='/assets/images/logo-colored.png'
      priority
      width={200}
      height={60}
      alt='Peracel'
    />
  );
};

export default LogoColored;
