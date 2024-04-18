const Container = ({ className, id, children }) => {
  return (
    <div
      id={id && id}
      className={`container p-8 mx-auto ${className && className}`}
    >
      {children}
    </div>
  );
};

export default Container;
