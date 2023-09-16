const IconCard = ({ icon }) => {
  const { picture, name } = icon;
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn w-32 h-32 bg-white items-center hover:bg-yellow-400"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="">
          <img className="w-8" src={picture} alt="" />
          <p>{name}</p>
        </div>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* If there is a button in the form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">Coming soon...</p>
        </div>
      </dialog>
    </div>
  );
};

export default IconCard;
