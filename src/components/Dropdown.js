import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      // avoid a tons of bug in professional projects.
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
      console.log("divEl", divEl.current);
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler, true);
    }


  }, []);

  const handleClick = () => {
    window.timeThree = performance.now();

    // setIsOpen((currentIsOpen) => !currentIsOpen);
    setIsOpen(!isOpen);
  };

  window.timeTwo = performance.now()
  const handleOptionClick = (option) => {
    window.timeOne = performance.now();
    // CLOSE Dropdown
    setIsOpen(false);
    // what option did the user click on
    onChange(option);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div className='hover:bg-sky-100 rounded cursor-pointer p-1' key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )

  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>

      {isOpen &&
        <Panel
          className='absolute top-full'
        >
          {renderedOptions}
        </Panel>
      }

    </div>
  );
}

export default Dropdown;
