import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import Text from "ui/atomic/text/Text";
import ParentProps from "ui/common/props/ParentProps";
import Spinner from "./spinner/Spinner";

const loadingStyle = TailwindStyle.builder()
  .add("fixed top-0 left-0 w-screen h-screen")
  .add("flex flex-col justify-center items-center space-y-4")
  .add("bg-black bg-opacity-80")
  .get();
interface LoadingProps extends ParentProps {
  isLoading?: boolean;
}

const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  if (props.isLoading)
    return (
      <div className={loadingStyle}>
        <Spinner />
        <Text {...props} color={`light`} size={`xl`} />
      </div>
    );

  return <>{props.children}</>;
};

export default Loading;
