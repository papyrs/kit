export const cloudProvider = <T>(): Promise<T> => {
  const cdn: string | undefined = import.meta.env.PUBLIC_VITE_CLOUD_API_CDN as string | undefined;

  if (!cdn) {
    throw new Error('No cloud API CDN configured.');
  }

  return import(cdn);
};
