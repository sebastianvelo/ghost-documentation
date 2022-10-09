import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ActionButton from "ui/atomic/button/ActionButton";
import $ from "jquery";
import { FunctionComponent } from "react";

const controlStyle = (props: ControlProps) =>
  TailwindStyle.builder()
    .add("z-20 absolute hidden md:block")
    .addIf("right-0", props.right)
    .addIf("left-0", !props.right)
    .get();

const slide = (id: string, right: boolean) => {
  const carousel = $(`#${id}`);
  if (!carousel) return;
  const scroll = carousel.scrollLeft() ?? 0;
  const width = carousel.width() ?? 0;
  const move = (width - 40) * (right ? 1 : -1);
  carousel.scrollLeft(scroll + move);
};

export interface ControlProps {
  id: string;
  right: boolean;
}

const Control: FunctionComponent<ControlProps> = (props: ControlProps) => (
  <ActionButton
    color={"primary"}
    onClick={() => slide(props.id, props.right)}
    className={controlStyle(props)}
  >
    {props.right ? ">" : "<"}
  </ActionButton>
);

export default Control;
