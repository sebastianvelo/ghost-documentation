import { FunctionComponent } from "react";
import Items, { ItemsProps } from "./items/Items";
import Control from "./controls/Control";

export interface CarouselProps extends ItemsProps {}

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps) => (
  <div className={`flex items-center`}>
    <Control id={props.id} right={false} />
    <Items {...props} />
    <Control id={props.id} right={true} />
  </div>
);

export default Carousel;
