type didUnmountHandler = () => void;

type didMountHandler = () => (didUnmountHandler | void);

declare const useDidMount : (onDidMount : didMountHandler) => void;

export default useDidMount;
