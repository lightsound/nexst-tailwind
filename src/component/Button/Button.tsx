import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ComponentPropsWithRef } from "react";
import { createElement, forwardRef } from "react";

type Tag = "button" | "input" | "a";

type Element = HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

type Button = {
  tag: "button";
  type?: ComponentPropsWithRef<"button">["type"];
  role?: never;
};

type Anchor = {
  tag: "a";
  linkProps: LinkProps;
  href?: never;
  ref?: never;
  target?: never;
  role?: never;
};

type Input = {
  tag: "input";
  value: ComponentPropsWithRef<"input">["value"];
  type: ComponentPropsWithRef<"input">["type"];
  children?: never;
  role?: never;
};

type ButtonProps<T extends Tag> = ComponentPropsWithRef<T> &
  (T extends "button" ? Button : T extends "a" ? Anchor : Input);

const isExternalLink = (href: LinkProps["href"]) => {
  const target = typeof href === "string" ? href : href.href;
  return target?.startsWith("http") || target?.startsWith("//");
};

/**
 * @package
 */
export const Button = forwardRef<Element, ButtonProps<Tag>>((props, ref) => {
  if (!props.tag) {
    throw new Error("tag props is required");
  }

  if (props.tag === "a") {
    const { linkProps, tag, ...otherProps } = props;
    return (
      <Link {...linkProps}>
        {createElement(tag, {
          ref,
          ...otherProps,
          role: "button",
          target: isExternalLink(linkProps.href) ? "_blank" : undefined,
          rel: isExternalLink(linkProps.href)
            ? "noopener noreferrer"
            : undefined,
        })}
      </Link>
    );
  }

  const { tag, ...otherProps } = props;
  return createElement(tag, { ref, type: "button", ...otherProps });
});

Button.displayName = "Button";
