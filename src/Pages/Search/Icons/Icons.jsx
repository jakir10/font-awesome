import { useEffect, useState } from "react";
import IconCard from "./IconCard";

const Icons = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("iconsData.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);

  return (
    <div className="bg bg-base-200">
      <p className="my-8 text-lg font-semibold text-sky-900 ">
        {icons.length} Icons
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {icons.map((icon) => (
          <IconCard key={icon.id} icon={icon}></IconCard>
        ))}
      </div>
    </div>
  );
};

export default Icons;
