type SortingoptionsProps = {
  sortMethod: string;
  setSortMethod: (value: string) => void;
};

const SortingOptions = ({ sortMethod, setSortMethod }: SortingoptionsProps) => {
  return (

    <div     >
      <select
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)
        }
        className="p-1 ml-28 rounded-sm"
    
      >
        <option value="price low to high" >price low to high</option>
        <option value="price high to low">price high to low</option>
        <option value="name a to z">name a to z</option>
        <option value="default">default</option>
      </select>
      </div>

  );
};

export default SortingOptions;
