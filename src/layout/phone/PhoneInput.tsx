import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneField = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">
        Phone number
      </label>

      <PhoneInput
        country={"us"} // fallback
        value={phone}
        onChange={setPhone}
        inputClass="!w-full !rounded-xl !border-gray-300 !py-3 !pl-14 !text-sm"
        buttonClass="!rounded-l-xl !border-gray-300"
        containerClass="!w-full"
        dropdownClass="!z-50"
      />
    </div>
  );
};

export default PhoneField;
