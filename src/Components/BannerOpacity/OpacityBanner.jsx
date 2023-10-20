const OpacityBanner = () => {
  return (
    <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
      <div className="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-pink-900 bg-pink-100 border-pink-100 rounded-none card card-body sm:rounded-lg md:px-10 h-20 lg:gap-0">
        <div className=" md:col-span-3">
          <h2 className="mb-3 font-serif text-xs  font-normal leading-tight lg:text-3xl text-center">
            22% discount on Friday 22 Octobor 2024
          </h2>
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
    </section>
  );
};

export default OpacityBanner;
