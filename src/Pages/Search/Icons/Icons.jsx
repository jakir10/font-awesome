import { useEffect, useState } from "react";
import IconCard from "./IconCard";

const Icons = () => {
  const [icons, setIcons] = useState([]);
  const [filters, setFilters] = useState({
    style: [],
    categories: [],
    type: [],
  });
  const [uniqueStyles, setUniqueStyles] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [filteredIcons, setFilteredIcons] = useState([]);

  useEffect(() => {
    fetch("iconsData.json")
      .then((res) => res.json())
      .then((data) => {
        setIcons(data);

        // Extract unique styles, categories, and types from the data
        const styles = [...new Set(data.map((icon) => icon.style))];
        const categories = [...new Set(data.map((icon) => icon.category))];
        const types = [...new Set(data.map((icon) => icon.type))];

        setUniqueStyles(styles);
        setUniqueCategories(categories);
        setUniqueTypes(types);
      });
  }, []);

  useEffect(() => {
    // Filter icons based on selected filters
    const filtered = icons
      .filter((icon) => {
        return filters.style.length === 0 || filters.style.includes(icon.style);
      })
      .filter((icon) => {
        return (
          filters.categories.length === 0 ||
          filters.categories.includes(icon.category)
        );
      })
      .filter((icon) => {
        return filters.type.length === 0 || filters.type.includes(icon.type);
      });

    setFilteredIcons(filtered);
  }, [filters, icons]);

  // Function to handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }

      return updatedFilters;
    });
  };

  const classicIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 mb-2 items-center mx-auto transition-fill duration-300 ease-in-out fill-current group-hover:text-sky-500"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
    </svg>
  );

  const sharpIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 mb-2 items-center mx-auto transition-fill duration-300 ease-in-out fill-current group-hover:text-sky-500"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
    </svg>
  );

  const brandIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 mb-2 items-center mx-auto transition-fill duration-300 ease-in-out fill-current group-hover:text-sky-500"
      height="1em"
      viewBox="0 0 448 512"
    >
      <path d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z" />
    </svg>
  );

  const freeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 mb-2 items-center mx-auto transition-fill duration-300 ease-in-out fill-current group-hover:text-sky-500"
      height="1em"
      viewBox="0 0 448 512"
    >
      <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
    </svg>
  );

  const uniqueType = ["classic", "sharp", "brands", "free"];

  return (
    <>
      {/* top icon section */}
      <div className="flex space-x-10 pl-24 font-semibold mt-6">
        {uniqueType.map((type) => (
          <a
            key={type}
            className={`link link-hover group hover:text-sky-500 hover:no-underline ${
              filters.type.includes(type) && "text-sky-500"
            }`}
            onClick={() => handleFilterChange("type", type)}
          >
            {type === "classic" && classicIcon}
            {type === "sharp" && sharpIcon}
            {type === "brands" && brandIcon}
            {type === "free" && freeIcon}
            {type}
          </a>
        ))}
      </div>

      <div className="flex pl-24 bg-gray-100">
        {/* Aside Section */}
        <aside className="w-72 bg-gray-100 p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Style</h2>
            <div>
              {uniqueStyles.map((style) => (
                <label
                  key={style}
                  className={`block cursor-pointer ${
                    filters.style.includes(style) && "text-sky-500"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={style}
                    checked={filters.style.includes(style)}
                    onChange={() => handleFilterChange("style", style)}
                  />
                  {style}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            <div>
              {uniqueCategories.map((category) => (
                <label
                  key={category}
                  className={`block cursor-pointer ${
                    filters.categories.includes(category) && "text-sky-500"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={category}
                    checked={filters.categories.includes(category)}
                    onChange={() => handleFilterChange("categories", category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="bg bg-base-200 p-4 flex-grow">
          <p className="my-8 text-lg font-semibold text-sky-900">
            {filteredIcons.length} Icons
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {filteredIcons.map((icon) => (
              <IconCard key={icon.id} icon={icon}></IconCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
