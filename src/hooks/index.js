import { useEffect, useState } from 'react';

function useDebounce(value, delay = 0) {
    const [input, setInput] = useState(value);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setInput(value);
        }, delay);

        return () => {
            clearTimeout(timeOut);
        };
    }, [value]);

    return input;
}

export { useDebounce };
