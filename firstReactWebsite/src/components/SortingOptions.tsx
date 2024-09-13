import { set } from "zod";

type SortingoptionsProps = {
    sortMethod: string;
    setSortMethod: (value: string) => void
};

const SortingOptions = ({sortMethod, setSortMethod}: SortingoptionsProps) => {
  return (
    <>
      <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)}>
        <option value="price low to high">price low to high</option>
        <option value="price high to low">price high to low</option>
        <option value="name a to z">name a to z</option>
        <option value="default">default</option>
      </select>
    </>
  );
};

export default SortingOptions;
