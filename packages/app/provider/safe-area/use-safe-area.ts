//@ts-ignore
//eslint-disable-next-line @typescript-eslint/no-var-requires
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useSafeArea = useSafeAreaInsets;

// `export { useSafeAreaInsets as useSafeArea }` breaks autoimport, so do this instead
export { useSafeArea };
