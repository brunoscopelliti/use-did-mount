/* eslint-env jest */

import { renderHook } from "@testing-library/react-hooks";

import useDidMount from "./";

describe("useDidMount", () => {
  it("executes the effect only during the first render", () => {
    const onMount = jest.fn();

    const { rerender } = renderHook(() => {
      useDidMount(onMount);
    });

    expect(onMount).toBeCalledTimes(1);

    rerender();

    expect(onMount).toBeCalledTimes(1);
  });

  it("doesn't executed cleanup during re-renders", () => {
    const onMount = jest.fn();
    const onUnmount = jest.fn();

    const { rerender } = renderHook(() => {
      useDidMount(onMount, onUnmount);
    });

    expect(onMount).toBeCalledTimes(1);

    rerender();

    expect(onMount).toBeCalledTimes(1);

    expect(onUnmount).not.toHaveBeenCalled();
  });

  it("executes cleanup when components is unmounted", () => {
    const onUnmount = jest.fn();

    const { unmount } = renderHook(() => {
      useDidMount(null, onUnmount);
    });

    expect(onUnmount).not.toBeCalled();

    unmount();

    expect(onUnmount).toBeCalledTimes(1);
  });
});
