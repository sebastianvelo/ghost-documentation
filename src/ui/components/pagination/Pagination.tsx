import Row from "ui/layout/row/Row";
import ColorProps from "ui/common/props/ColorProps";
import ActionList from "ui/lists/actions/ActionList";
import { FunctionComponent, useState } from "react";
import PaginationControl from "./control/PaginationControl";

interface PaginationProps extends ColorProps {
  total: number;
  pagesToShow: number;
  active?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = (
  props: PaginationProps
) => {
  const [active, setActive] = useState(props.active ?? 1);
  const half = Math.floor(props.pagesToShow / 2) + 1;

  const getPages = () =>
    Array(props.pagesToShow)
      .fill("")
      .map((_, i) => i + 1)
      .map((i) =>
        active < half // Active is less than half of quantityToShow
          ? i // Then return the number
          : active > props.total - half + 1// Active is greater than the total pages - half of quantityToShow
          ? i + (props.total - props.pagesToShow) // Then return the number + the difference between size and quantity to show
          : i + (active - half)
      );

  const handleClick = (page: number) => {
    if (props.onPageChange) props.onPageChange(page);
    setActive(page);
  };
  return (
    <Row className={`space-x-2`}>
      <PaginationControl
        changePage={() => handleClick(active - 1)}
        disabled={active === 1}
        color={props.color}
      />
      <ActionList
        className={`space-x-2`}
        actions={getPages().map((page) => ({
          children: `${page}`,
          color: props.color,
          quiet: page !== active,
          onClick: () => handleClick(page),
          type: 'button',
          className: `w-14`
        }))}
      />
      <PaginationControl
        changePage={() => handleClick(active + 1)}
        disabled={active === props.total}
        color={props.color}
        right
      />
    </Row>
  );
};

export default Pagination;
