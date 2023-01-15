import { usePathname, useRouter } from "next/navigation";

interface Props {
  name: string;
  href?: string;
  onClick?: () => void;
}

function NavButton({ name, href, onClick }: Props) {
  const pathname = usePathname();
  const { push } = useRouter();

  const navigate = () => {
    if (href) push(href);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={navigate}
      className={`px-4 py-3 uppercase text-md transition focus-visible:bg-zinc-500 outline-none ${
        pathname === href ? "text-white" : "text-zinc-400 hover:text-zinc-300"
      }`}
    >
      {name}
    </button>
  );
}

export default NavButton;
