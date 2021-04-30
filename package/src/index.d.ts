type didUnmountHandler = () => undefined;

type didMountHandler = () => (didUnmountHandler | undefined);

declare const useDidMount : (onDidMount : didMountHandler) => void;

export default useDidMount;
