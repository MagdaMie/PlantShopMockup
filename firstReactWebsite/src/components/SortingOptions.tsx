type SortingoptionsProps = {
  sortMethod: string;
  setSortMethod: (value: string) => void;
};

const SortingOptions = ({ sortMethod, setSortMethod }: SortingoptionsProps) => {
  return (
    <div className="flex ml-28 gap-6">
      <h3>Sort plants:</h3>
      <div className="border-2 border-customGreen-dark rounded-md">
        <select
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
          className="p-1 rounded-md bg-[#242424]"
        >
          <option value="price low to high">price low to high</option>
          <option value="price high to low">price high to low</option>
          <option value="name a to z">name a to z</option>
          <option value="default">default</option>
        </select>
      </div>
    </div>
  );
};

export default SortingOptions;
