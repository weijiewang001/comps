import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    console.log("stale version", expandedIndex);
    setExpandedIndex((currentExpandedIndex) => {
      console.log("up to date", currentExpandedIndex);
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    })


  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-2xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return <div key={item.id}>
      <div className="flex justify-between p-3 bg-gray-50 border-b items-center cusor-poninter" onClick={() => handleClick(index)}>
        {item.label}
        {icon}
      </div>
      {/* 利用&&语法。如果isExpanded return false 则不显示，return true 则显示后面div内容 */}
      {isExpanded && <div className="border-b p-5">{item.content}</div>}
    </div>

  })

  return <div className='border-x border-t rounded'>
    {renderedItems}
  </div>;
}

export default Accordion;