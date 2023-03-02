import { useState } from "react";
import { Switch } from "@headlessui/react";

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-black">Yearly</p>

      <div className="flex items-center space-x-1.5 text-gray">
        <p>10% off</p>

        {/* Toggle */}
        <div className="pt-1">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-gray" : "bg-semi-gray"}
            relative inline-flex h-[20px] w-[55px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
