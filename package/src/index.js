import { useEffect } from "react";

/**
 * React hook to handle componentDidMount,
 * and componentWillUnmount lifecycle events.
 * @name useDidMount
 * @param {React.EffectCallback} onDidMount
 * @returns {void}
 */
const useDidMount =
  (onDidMount) => {
    useEffect(onDidMount, []); // eslint-disable-line react-hooks/exhaustive-deps
  };

export default useDidMount;
