import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionLinkProps } from "ui/atomic/link/ActionLink";
import { FunctionComponent } from "react";
import BreadcrumbLevel from "./level/BreadcrumbLevel";

const isLastLevel = (i: number, props: BreadcrumbProps) =>
  i === props.levels.length - 1;

const getColor = (i: number, props: BreadcrumbProps) =>
  !isLastLevel(i, props) ? "info" : undefined;
interface BreadcrumbProps {
  levels: ActionLinkProps[];
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = (props) => (
  <div className={`space-x-2`}>
    {props.levels.map((level, i) => (
      <BreadcrumbLevel
        {...level}
        color={getColor(i, props)}
        icon={
          !isLastLevel(i, props) && (
            <FontAwesomeIcon icon={faChevronRight} className={`text-xs`} />
          )
        }
      />
    ))}
  </div>
);

export default Breadcrumb;
