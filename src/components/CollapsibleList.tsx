import { useState } from "react";
import type { TocItem } from "~/types/TableOfContentTypes";
import { getTableOfContents } from "~/utils/toc";

type CollapsibleListProps = {
  items: TocItem[];
};

export default function CollapsibleList({ items }: CollapsibleListProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-lg ">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left flex items-center p-3 text-sm text-gray-600 hover:text-black"
          >
            <span className="pr-2">
              {openIndexes.includes(index) ? "▼" : "▶"}
            </span>
            <a
              href={
                item.topicHref
                  ? `${item.topicHref?.slice(0, -3)}`
                  : item.href?.slice(0, -3)
              }
            >
              {item.name}
            </a>
          </button>

          {openIndexes.includes(index) && item.items && (
            <ul className="ml-4 mb-2">
              {item.items.map((item, subIndex) => (
                <li key={subIndex} className="p-2 text-gray-700">
                  <a
                    href={
                      item.topicHref
                        ? `${item.topicHref?.slice(0, -3)}`
                        : item.href?.slice(0, -3)
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
