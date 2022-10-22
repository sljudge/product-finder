import React, { useCallback, useEffect, useState } from "react";
import cx from "classnames";

import { ReactComponent as DownChevron } from "assets/images/down-chevron.svg";
import Checkbox from "components/Checkbox";

type SelectFilterOption = string | { [key: string]: string[] };

type OptionsArray = SelectFilterOption[];

type OptionsArrayWithTitles = {
  title: string;
  options: SelectFilterOption[];
}[];

const isArrayWithTitles = (arr: OptionsArray | OptionsArrayWithTitles) => {
  if (typeof arr[0] === "object" && !!arr[0].options) {
    return true;
  } else {
    return false;
  }
};

interface Props {
  options: OptionsArray | OptionsArrayWithTitles;
  title: string;
  onChange(vals: string[]): void;
}

const SelectFilter: React.FC<Props> = ({ options, title, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelection = (val: string) => {
    if (selectedOptions.includes(val)) {
      setSelectedOptions(selectedOptions.filter((x) => x !== val));
    } else {
      setSelectedOptions([...selectedOptions, val]);
    }
  };

  const handleParentSelection = (vals: string[]) => {
    if (selectedOptions.includes(vals[0])) {
      setSelectedOptions(
        selectedOptions.filter((x) => {
          vals.includes(x);
        })
      );
    } else {
      setSelectedOptions([...selectedOptions, ...vals]);
    }
  };

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  const renderOptions = useCallback(
    (arr: OptionsArray) => {
      return arr.map((item) => {
        if (typeof item === "string") {
          return (
            <li key={item}>
              <Checkbox
                label={item}
                isChecked={selectedOptions.includes(item)}
                value={item}
                onChange={handleSelection}
              />
            </li>
          );
        } else {
          const parentValue = Object.keys(item)[0];
          const childValues = Object.values(item)[0];
          return (
            <div key={parentValue}>
              <li>
                <Checkbox
                  label={parentValue}
                  isChecked={childValues.every((x) =>
                    selectedOptions.includes(x)
                  )}
                  value={[parentValue, ...childValues]}
                  onChange={handleParentSelection}
                />
              </li>
              <ul className="ml-4">
                {childValues.map((subItem) => (
                  <li key={subItem}>
                    <Checkbox
                      label={subItem}
                      isChecked={selectedOptions.includes(subItem)}
                      value={subItem}
                      onChange={handleSelection}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      });
    },
    [selectedOptions]
  );

  const renderOptionsWithTitles = useCallback(
    (arr: OptionsArrayWithTitles) => {
      return arr.map((item) => (
        <div key={item.title}>
          <div className="text-blue-200 text-base mb-1">{item.title}</div>
          <div className="mb-4">{renderOptions(item.options)}</div>
        </div>
      ));
    },
    [selectedOptions]
  );

  return (
    <div className="w-48 mr-4">
      <button
        className="p-2 rounded-sm bg-white border border-gray-100 text-base flex justify-between items-center w-full"
        onClick={toggleOpen}
      >
        <span className="leading-none">{title}</span>
        <DownChevron
          stroke="#D0043C"
          width={12}
          height={12}
          className={cx(
            {
              "transform rotate-180": isOpen,
            },
            "transition duration-200"
          )}
        />
      </button>
      <ul
        className={cx(
          {
            "h-0 p-0": !isOpen,
            "p-2": isOpen,
          },
          `shadow-lg list-style-none max-h-60 overflow-y-scroll scrollbar scrollbar-rounded-sm scrollbar-track-white scrollbar-thumb-gray-200 scrollbar-w-2 bg-white absolute w-48`
        )}
      >
        {isArrayWithTitles(options) // -> proper type check needed
          ? renderOptionsWithTitles(options as OptionsArrayWithTitles)
          : renderOptions(options as OptionsArray)}
      </ul>
    </div>
  );
};

export default SelectFilter;
