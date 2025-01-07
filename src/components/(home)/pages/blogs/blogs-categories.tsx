export const BlogsCategories = () => (
  <div className="flex flex-wrap items-center mb-8 gap-2">
    {categories.map((category) => (
      <button
        key={category}
        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
      >
        {category}
      </button>
    ))}
  </div>
);

const categories = [
  "All Posts",
  "Engineering",
  "Product",
  "Design",
  "Technology",
  "Architecture",
  "Security",
];