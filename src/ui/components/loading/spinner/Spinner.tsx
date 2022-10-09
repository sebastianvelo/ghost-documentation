import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const spinnerStyle = (className: string) =>
  TailwindStyle.builder()
    .add("ease-linear rounded-full h-32 w-32")
    .add(className)
    .get();

interface SpinnerProps {}

const Spinner: FunctionComponent<SpinnerProps> = () => (
  <div className={spinnerStyle("relative border-4 border-primary-light")}>
    <div
      className={spinnerStyle(
        "absolute -top-1 -left-1 border-t-4 border-b-0 border-l-0 border-r-0 border-primary-dark animate-spin"
      )}
    ></div>
  </div>
);

export default Spinner;
