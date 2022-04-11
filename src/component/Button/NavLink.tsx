import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, ReactElement } from "react";
import { cloneElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClassName: string };

/**
 * @package
 */
export const NavLink: FC<Props> = ({
  activeClassName,
  children,
  ...linkProps
}) => {
  const router = useRouter();

  return (
    <Link {...linkProps}>
      {cloneElement(children, {
        className:
          router.pathname === linkProps.href
            ? `${activeClassName} ${children.props.className ?? ""}`
            : children.props.className ?? "",
      })}
    </Link>
  );
};
