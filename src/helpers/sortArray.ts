export type SortOption = {
  id: "name" | "price";
  order: "asc" | "desc";
};

export function sortArray<T>(
  array: T[],
  key: keyof T,
  order: "asc" | "desc" = "asc",
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal === null && bVal === null) return 0;
    if (aVal === null) return order === "asc" ? -1 : 1;
    if (bVal === null) return order === "asc" ? 1 : 1;

    if (typeof aVal === "string" && typeof bVal === "string") {
      return order === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    if (aVal! < bVal!) return order === "asc" ? -1 : 1;
    if (aVal! > bVal!) return order === "asc" ? 1 : -1;
    return 0;
  });
}
