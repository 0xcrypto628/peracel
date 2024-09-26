import NavItem from "./NavItem";
import Button from "./ui/Buttons";
import UserAccountNav from "./UserAccountNav";

const NavItems = () => {
  return (
    <div className='flex items-center gap-[20px]'>
      <NavItem text='HOME' />
      <NavItem text='ABOUT US' />
      <NavItem text='CONTACT' />
      <Button>SUBSCRIBE US</Button>
      <UserAccountNav />
    </div>
  );
};

export default NavItems;
