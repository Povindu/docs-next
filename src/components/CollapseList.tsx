import { useState, useEffect } from "react";
import type { TocItem } from "~/types/TocTypes";

type CollapsibleListProps = {
  items: TocItem[];
};

export default function CollapsibleList({ items }: CollapsibleListProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    console.log("CollapsibleList mounted!"); // ✅ Debugging
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <p>fwqefew</p>
      {items.map((item, index) => (
        <div key={index} className="border-b last:border-none">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left flex justify-between items-center p-3 text-lg font-semibold hover:bg-gray-100"
          >
            {item.name}
            <span>{openIndexes.includes(index) ? "▲" : "▼"}</span>
          </button>
          {openIndexes.includes(index) && item.items && (
            <ul className="ml-4 mb-2">
              {item.items.map((item, subIndex) => (
                <li key={subIndex} className="p-2 text-gray-700">
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
