import { useEffect } from "react";

/**
 * React hook to handle componentDidMount,
 * and componentWillUnmount lifecycle events.
 * @name useDidMount
 * @param {Function} onDidMount
 * @returns {void}
 */
const useDidMount =
  (onDidMount) => {
    useEffect(onDidMount, []); // eslint-disable-line react-hooks/exhaustive-deps
  };

export default useDidMount;
