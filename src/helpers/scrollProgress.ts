export const getDocHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
};

export const calculateScrollDistance = () => {
  const scrollTop = window.pageYOffset; // how much the user has scrolled by
  const winHeight = window.innerHeight;
  const docHeight = getDocHeight();

  const totalDocScrollLength = docHeight - winHeight;
  const scrollPostion = (scrollTop / totalDocScrollLength) * 100;

  return scrollPostion;
};
