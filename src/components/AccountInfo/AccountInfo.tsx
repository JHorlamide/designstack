import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Input from "../CustomInput/Input";

import useCountry from "../../hooks/useCountry";
import useCity from "../../hooks/useCity";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CustomBtn from "../CustomBtn/CustomBtn";
import AuthContext, { AuthContextType } from "../../context/AuthProvider";

const AccountInfo = () => {
  const { authUser } = React.useContext(AuthContext) as AuthContextType;

  const {
    queryCountry,
    selectedCountry,
    filteredCountries,
    setQueryCountry,
    setSelectedCountry,
  } = useCountry();

  const {
    selectedCity,
    setSelectedCity,
    queryCities,
    setQueryCities,
    filteredCities,
  } = useCity(selectedCountry.countryCode);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pushNotification, setPushNotification] = useState(true);
  const [reCarEmail, setReCarEmail] = useState(true);

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (authUser && authUser.user) {
      setFirstName(authUser.user.name.split(" ")[0]);
      setLastName(authUser.user.name.split(" ")[1]);
    }
  }, [firstName, lastName]);

  return (
    <div className="pt-8 w-full">
      <form
        className="w-full space-y-8 divide-y-2 divide-light-gray"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Account Information */}
        <div className="space-y-5">
          <h1 className="capitalize font-semibold">account information</h1>

          <div className="flex space-x-6 w-full">
            <Input
              id="firstName"
              type="text"
              label="First Name"
              errors={errors}
              value={firstName}
              register={register}
              required={true}
              validationSchema={{
                required: "First name is required",
              }}
              className="border border-light-gray py-1 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />

            <Input
              id="lastName"
              type="text"
              label="Last Name"
              errors={errors}
              value={lastName}
              register={register}
              required={true}
              validationSchema={{
                required: "Last name is required",
              }}
              className="border border-light-gray py-1 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />
          </div>
        </div>

        {/* Physical Address */}
        <div className="space-y-5 pt-5">
          <h1 className="capitalize font-semibold">Physical Address</h1>

          {/* Country & City */}
          <div className="flex space-x-6 w-full">
            {/* Country */}
            <div className="w-[450px] z-10">
              <Combobox value={selectedCountry} onChange={setSelectedCountry}>
                <Combobox.Label className={"mb-2"}>Country</Combobox.Label>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default border border-light-gray rounded-md bg-blue text-right">
                    <Combobox.Button className="absolute inset-y-0 left-5 flex items-center pr-2">
                      {selectedCountry.flag}
                    </Combobox.Button>

                    <Combobox.Input
                      className="w-full py-2 pl-12 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(country: any) => country.name}
                      onChange={(event) => setQueryCountry(event.target.value)}
                    />
                  </div>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQueryCountry("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredCountries.length === 0 && queryCountry !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredCountries.map((country, idx) => (
                          <Combobox.Option
                            key={idx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-black"
                                  : "text-gray-900"
                              }`
                            }
                            value={country}
                          >
                            {({ selected, active }) => (
                              <>
                                <div
                                  className={`block truncate ${
                                    selected
                                      ? "flex space-x-5 font-medium"
                                      : "flex space-x-5 font-normal"
                                  }`}
                                >
                                  <p>{country.flag}</p>
                                  <p>{country.name}</p>
                                </div>
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>

            {/* City */}
            <div className="w-[450px] z-10">
              <Combobox value={selectedCity} onChange={setSelectedCity}>
                <Combobox.Label className={"mb-2"}>City</Combobox.Label>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default border border-light-gray rounded-md bg-blue text-right">
                    <Combobox.Input
                      className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(city: any) => city}
                      onChange={(event) => setQueryCities(event.target.value)}
                    />
                  </div>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQueryCities("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredCities?.length === 0 && queryCities !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredCities?.map((city, idx) => (
                          <Combobox.Option
                            key={idx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-black"
                                  : "text-gray-900"
                              }`
                            }
                            value={city}
                          >
                            {({ selected, active }) => (
                              <>
                                <div
                                  className={`block truncate ${
                                    selected
                                      ? "flex space-x-5 font-medium"
                                      : "flex space-x-5 font-normal"
                                  }`}
                                >
                                  <p>{city}</p>
                                </div>
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>

            {/* < SelectOption /> */}
          </div>

          {/* Address & Post Code */}
          <div className="flex space-x-6 w-full">
            <Input
              id="address"
              type="text"
              label="Address"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "Address is required",
              }}
              className="border border-light-gray py-1 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />

            <Input
              id="postalCode"
              type="text"
              label="Post Code"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "Post code is required",
              }}
              className="border border-light-gray py-1 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="">
              Phone Number
            </label>
            <PhoneInput
              country={"us"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e)}
              inputStyle={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Language & Currency */}
        <div className="space-y-5 pt-5">
          <h1 className="capitalize font-semibold">language & currency</h1>

          <div className="flex space-x-6 w-full">
            <Input
              id="language"
              type="text"
              label="Default Language"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "language name is required",
              }}
              className="border border-light-gray py-1 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />

            <Input
              id="currency"
              type="text"
              label="Default Currency"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "currency is required",
              }}
              className="border border-light-gray py-1 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />
          </div>
        </div>

        {/* Notification */}
        <div className="space-y-5 pt-5">
          <h1 className="capitalize font-semibold">language & currency</h1>

          <div className="flex flex-col space-y-3 w-full">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={reCarEmail}
                onChange={(e) => setReCarEmail(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">
                {" "}
                I want to receive ReCars's emails
              </span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={pushNotification}
                onChange={(e) => setPushNotification(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">Push Notification</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-5">
          <div className="flex items-center space-x-1.5">
            <img src="/check_mark.png" alt="" className="w-4 h-4" />
            <p className="capitalize">all changes saved</p>
          </div>

          <CustomBtn
            type="submit"
            className="bg-blue text-white py-3 px-6 rounded-sm"
          >
            Save Changes
          </CustomBtn>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
