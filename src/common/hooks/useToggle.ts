import { useCallback, useState } from "react";

const useToggle = (def: boolean = false): [boolean, () => void] => {
  const [active, setActive] = useState<boolean>(def);
  const toggle = useCallback(() => setActive((val) => !val), []);
  return [active, toggle];
};

export default useToggle;
