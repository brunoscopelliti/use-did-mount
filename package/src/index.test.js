import { renderHook } from "@testing-library/react-hooks";

import useDidMount from "./";

describe("useDidMount", () => {
  it("executes the effect only during the first render", () => {
    const onMount = jest.fn();

    const { rerender } = renderHook(() => {
      useDidMount(onMount);
    });

    expect(onMount).toHaveBeenCalledTimes(1);

    rerender();

    expect(onMount).toHaveBeenCalledTimes(1);
  });

  it("doesn't executed cleanup during re-renders", () => {
    const onUnmount = jest.fn();
    const onMount = jest.fn(() => onUnmount);

    const { rerender } = renderHook(() => {
      useDidMount(onMount);
    });

    expect(onMount).toHaveBeenCalledTimes(1);

    rerender();

    expect(onMount).toHaveBeenCalledTimes(1);

    expect(onUnmount).not.toHaveBeenCalled();
  });

  it("executes cleanup when components is unmounted", () => {
    const onUnmount = jest.fn();
    const onMount = jest.fn(() => onUnmount);

    const { unmount } = renderHook(() => {
      useDidMount(onMount);
    });

    expect(onUnmount).not.toHaveBeenCalled();

    unmount();

    expect(onUnmount).toHaveBeenCalledTimes(1);
  });
});
