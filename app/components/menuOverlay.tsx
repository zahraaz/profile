import NavLink from "./navLink";

type overlayProps = {
  links: any;
};

type Link = {
  title: string;
  path: string;
};
type Index = number;

const MenuOverlay = ({ links }: overlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: Link, index: Index) => (
        <li key={index} className="text-xl">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
