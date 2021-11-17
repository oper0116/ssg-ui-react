export const useRouter = () => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  prefetch: () => {
    console.debug('prefetch');
  },
  push: () => {
    console.debug('push');
  },
});

export default { useRouter };
