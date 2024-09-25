import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Buttons";

const NavItems = () => {
  return (
    <div className='flex items-center gap-[20px]'>
      <NavItem text='HOME' />
      <NavItem text='ABOUT US' />
      <NavItem text='CONTACT' />
      <Button>SUBSCRIBE US</Button>
      <ThemeToggle />
    </div>
  );
};

export default NavItems;
