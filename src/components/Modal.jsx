import React from "react";

const Modal = ({ item, isOpen, onClose }) => {
  const capsuleId = item && item.capsule_id;
  const capsuleSerial = item && item.capsule_serial;
  const capsuleType = item && item.type;
  const capsuleStatus = item && item.status;
  const capsuleDetails = item && item.details;
  const landings = item && item.landings;
  const missions = item && item.missions;
  const originalLaunch = item && item.original_launch;
  const reuseCount = item && item.reuse_count;

  return (
    <div
      data-testid="modal"
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden  md:inset-0 h-full bg-black/50 overflow-hidden inset-0 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* ----------------------------------------------------------- */}

        <div className="relative bg-white rounded-lg shadow w-full lg:w-6/12 p-4">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              {capsuleType} - {capsuleSerial}
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 space-y-6">
            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Capsule Id:&nbsp;</span>
              <span>{capsuleId || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Capsule Serial:&nbsp;</span>
              <span>{capsuleSerial || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Type:&nbsp;</span>
              <span>{capsuleType || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Status:&nbsp;</span>
              <span>{capsuleStatus || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Original Launch:&nbsp;</span>
              <span>{originalLaunch || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Details:&nbsp;</span>
              <span>{capsuleDetails || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Landings:&nbsp;</span>
              <span>{landings || "Not Available"}</span>
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Mission:</span>
              {missions && missions.length > 0 && (
                <ul className="list-disc text-base leading-relaxed text-gray-500">
                  {missions.map((mission, i) => (
                    <li
                      className="text-base leading-relaxed text-gray-500 space-x-4 ml-3 flex"
                      key={i}
                    >
                      <span>Name:&nbsp;</span> {mission.name || "Not Available"}
                      <span>Flight:&nbsp;</span>{" "}
                      {mission.flight || "Not Available"}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="text-base leading-relaxed text-gray-500 flex">
              <span className="font-bold">Reuse Count:&nbsp;</span>
              <span>{reuseCount || "Not Available"}</span>
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Modal;
