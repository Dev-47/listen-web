import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  href: string;
}

const ActiveLink: FC<Props> = ({ children, href }): JSX.Element => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const active: boolean = router.asPath === href;

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <button
        onClick={handleClick}
        className={`flex justify-start place-items-center space-x-2 pl-2 ${
          active ? "bg-gray-700 hover:bg-slate-600" : "hover:bg-gray-700"
        } hover:bg-gray-700 backdrop-blur-sm my-1 py-2 w-full rounded-md default-transition`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ActiveLink;
