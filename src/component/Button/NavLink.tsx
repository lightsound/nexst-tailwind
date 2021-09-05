import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { cloneElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClassName: string };

/**
 * @package
 */
export const NavLink = (props: Props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { children, activeClassName, ...linkProps } = props;
  const router = useRouter();
  const pathname = router.pathname === "/root" ? "/" : router.pathname;

  const className =
    pathname === linkProps.href
      ? `${activeClassName} ${children.props.className ?? ""}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
