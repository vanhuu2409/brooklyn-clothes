const LayoutView = ({ children }) => {
  return (
    <div className='sm:py-24 lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
      {children}
    </div>
  );
};

export default LayoutView;
