import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "../props/ColorProps";
import RoundableProps from "../props/RoundeableProps";
import SizeProps from "../props/SizeProps";

export const transitionStyle = () =>
  TailwindStyle.builder().add("transition-all duration-200 ease-in-out").get();

export const hoverableStyle = () =>
  TailwindStyle.builder().add("cursor-pointer").add(transitionStyle()).get();

export const textColorStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf("text-dark", props.color === "dark")
    .addIf("text-light", props.color === "light")
    .addIf(
      "text-secondary dark:text-secondary-light",
      props.color === "secondary"
    )
    .addIf("text-warning", props.color === "warning")
    .addIf("text-danger", props.color === "danger")
    .addIf("text-success", props.color === "success")
    .addIf("text-primary", props.color === "primary")
    .addIf("text-info", props.color === "info")
    .get();

export const textColorHoverableStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .add(hoverableStyle())
    .addIf("hover:text-dark-light", props.color === "dark")
    .addIf(
      "dark:hover:text-secondary-light hover:text-secondary-dark",
      props.color === "secondary"
    )
    .addIf("dark:hover:text-warning-light dark", props.color === "warning")
    .addIf("dark:hover:text-danger-light dark", props.color === "danger")
    .addIf("dark:hover:text-success-light dark", props.color === "success")
    .addIf("dark:hover:text-primary-light dark", props.color === "primary")
    .addIf("dark:hover:text-light-light dark", props.color === "light")
    .addIf("dark:hover:text-info-light dark", props.color === "info")
    .get();

export const bgColorStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf("bg-primary text-light", props.color === "primary")
    .addIf("bg-secondary text-light", props.color === "secondary")
    .addIf("bg-warning-light text-dark", props.color === "warning")
    .addIf("bg-danger text-light", props.color === "danger")
    .addIf("bg-success-dark text-light", props.color === "success")
    .addIf("bg-info text-light", props.color === "info")
    .addIf("bg-dark", props.color === "dark")
    .addIf("bg-light text-dark", props.color === "light")
    .addIf("bg-light dark:bg-dark dark:text-light", !props.color)
    .get();

export const bgColorHoverableStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .add(hoverableStyle())
    .addIf("hover:bg-primary-dark ", props.color === "primary")
    .addIf("hover:bg-secondary-dark ", props.color === "secondary")
    .addIf("hover:bg-warning", props.color === "warning")
    .addIf("hover:bg-danger-dark", props.color === "danger")
    .addIf("hover:bg-success-dark", props.color === "success")
    .addIf("hover:bg-info-dark", props.color === "info")
    .addIf("hover:bg-dark-light", props.color === "dark")
    .addIf("hover:bg-light-dark", props.color === "light")
    .addIf("hover:bg-light-dark dark:hover:bg-dark-light", !props.color)
    .get();

export const bgColorQuietHoverableStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf("hover:bg-primary hover:text-light", props.color === "primary")
    .addIf("hover:bg-secondary hover:text-light", props.color === "secondary")
    .addIf("hover:bg-warning-light hover:text-dark", props.color === "warning")
    .addIf("hover:bg-danger hover:text-light", props.color === "danger")
    .addIf("hover:bg-success-dark hover:text-light", props.color === "success")
    .addIf("hover:bg-info hover:text-light", props.color === "info")
    .addIf("hover:bg-dark", props.color === "dark")
    .addIf("hover:bg-light hover:text-dark", props.color === "light")
    .addIf(
      "hover:bg-light dark:hover:bg-dark dark:hover:text-light",
      !props.color
    )
    .get();

export const textSizeStyle = (props: SizeProps) =>
  TailwindStyle.builder()
    .addIf("text-md", !props.size || props.size === "m")
    .addIf("text-xs", props.size === "xs")
    .addIf("text-sm", props.size === "s")
    .addIf("text-lg", props.size === "l")
    .addIf("text-xl", props.size === "xl")
    .addIf("text-2xl", props.size === "2xl")
    .addIf("text-3xl", props.size === "3xl")
    .get();

export const roundedStyle = (props: RoundableProps) =>
  TailwindStyle.builder()
    .addIf("rounded-md", !props.radius || props.radius === "m")
    .addIf("rounded-xs", props.radius === "xs")
    .addIf("rounded-sm", props.radius === "s")
    .addIf("rounded-lg", props.radius === "l")
    .addIf("rounded-xl", props.radius === "xl")
    .addIf("rounded-2xl", props.radius === "2xl")
    .addIf("rounded-3xl", props.radius === "3xl")
    .addIf("rounded-full", props.radius === "full")
    .get();

export const borderColorStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf("border-dark", props.color === "dark")
    .addIf("border-secondary", props.color === "secondary")
    .addIf("border-warning", props.color === "warning")
    .addIf("border-danger", props.color === "danger")
    .addIf("border-success", props.color === "success")
    .addIf("border-primary", props.color === "primary")
    .addIf("border-light", props.color === "light")
    .addIf("border-info", props.color === "info")
    .addIf("border-dark dark:border-light", !props.color)
    .get();

export const divideColorStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf("divide-dark", props.color === "dark")
    .addIf("divide-secondary", props.color === "secondary")
    .addIf("divide-warning", props.color === "warning")
    .addIf("divide-danger", props.color === "danger")
    .addIf("divide-success", props.color === "success")
    .addIf("divide-primary", props.color === "primary")
    .addIf("divide-light", props.color === "light")
    .addIf("divide-info", props.color === "info")
    .addIf("divide-dark dark:divide-light", !props.color)
    .get();

export const buttonSizeStyle = (props: SizeProps) =>
  TailwindStyle.builder()
    .addIf("px-2 py-1", props.size === "s")
    .addIf("px-4 py-2", !props.size || props.size === "m")
    .addIf("px-6 py-3", props.size === "l")
    .get();
