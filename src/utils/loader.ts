import FullScreenLoader, {
  loaderRefType,
} from "../components/Loader/FullScreenLoader";

// eslint-disable-next-line no-var
export var isFullScreenLoaderLoading = false;

export const startFullScreenLoader = () => {
  const loaderRef: loaderRefType = FullScreenLoader.getRef();
  isFullScreenLoaderLoading = true;
  loaderRef?.startLoading();
};

export const stopFullScreenLoader = () => {
  const loaderRef: loaderRefType = FullScreenLoader.getRef();
  isFullScreenLoaderLoading = false;
  loaderRef?.stopLoading();
};
