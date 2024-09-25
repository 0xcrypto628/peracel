import NavItems from "./NavItems";
import LogoColored from "./ui/Logos/LogoColored";

const NavBar = () => {
  return (
    <div className='flex w-full justify-between items-center p-[10px] border-b-[1px]'>
      <LogoColored />
        <NavItems />
    </div>
  );
};

export default NavBar;
