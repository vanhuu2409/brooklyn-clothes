const LayoutView = ({ children }) => {
  return (
    <div className='sm:py-24 lg:max-w-[110rem] lg:px-8 w-full px-4 mx-auto'>
      {children}
    </div>
  );
};

export default LayoutView;
