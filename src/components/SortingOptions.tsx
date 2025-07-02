import { SortOption } from "../helpers/sortArray";

type SortingoptionsProps = {
  sortMethod: SortOption;
  setSortMethod: (value: SortOption) => void;
};

const options: (SortOption & { label: string })[] = [
  { id: "price", order: "asc", label: "Price: Low to High" },
  { id: "price", order: "desc", label: "Price: High to Low" },
  { id: "name", order: "asc", label: "Name: A to Z" },
  { id: "name", order: "desc", label: "Name: Z to A" },
];

const SortingOptions = ({ sortMethod, setSortMethod }: SortingoptionsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [id, order] = e.target.value.split("|") as [
      SortOption["id"],
      SortOption["order"],
    ];
    setSortMethod({ id, order });
  };

  return (
    <div className="flex flex-col items-center gap-3 lg:ml-28 lg:flex-row lg:gap-6">
      <h3>Sort plants:</h3>
      <div className="rounded-md border-2 border-customGreen-dark">
        <select
          value={`${sortMethod.id}|${sortMethod.order}`}
          onChange={handleChange}
          className="rounded-md bg-darkGray p-1"
        >
          {options.map(({ id, order, label }) => (
            <option key={`${id}-${order}`} value={`${id}|${order}`}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortingOptions;
