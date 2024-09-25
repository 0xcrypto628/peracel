import Link from "next/link";

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
  return <Link href={`/${text.toLowerCase().replace(/ /g, "")}`}>{text}</Link>;
};

export default NavItem;
