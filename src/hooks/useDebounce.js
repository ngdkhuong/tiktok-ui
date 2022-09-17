import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebouncevalue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncevalue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
