import { useState, useCallback } from 'react';

function getValueStorage(key) {
  if (typeof key === 'string') {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
}

function useLocalStorage(key) {
  const [currentKey] = useState(key);
  const [value, setValue] = useState(() => getValueStorage(currentKey));

  const setItem = useCallback(
    (value) => {
      if (typeof currentKey === 'string') {
        localStorage.setItem(currentKey, JSON.stringify(value));
        setValue(value);
      }
    },
    [currentKey]
  );

  const removeItem = useCallback(() => {
    localStorage.removeItem(currentKey);
    setValue(getValueStorage(currentKey));
  }, [currentKey]);

  return [value, { setItem, removeItem }];
}

export { useLocalStorage };
