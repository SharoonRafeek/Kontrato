export default ({ setContractForm }) => {
  return (
    <div className="max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between py-4 border-b md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-2xl font-bold">Create Contract</h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            onClick={() => setContractForm(true)}
            className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
