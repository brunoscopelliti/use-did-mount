import { useEffect } from "react";

const useDidMount =
  (onDidMount, onDidUnmount) => {
    useEffect(
      () => {
        if (typeof onDidMount == "function") {
          onDidMount();
        }
        if (typeof onDidUnmount == "function") {
          return onDidUnmount;
        }
      },
      [] // eslint-disable-line react-hooks/exhaustive-deps
    );
  };

export default useDidMount;
