import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { uploadImage } from "../../api/user/user";
import AuthContext, { AuthContextType } from "../../context/AuthProvider";
import CustomBtn from "../CustomBtn/CustomBtn";
import { CustomInput } from "../CustomInput/Input";

const UserInfo = () => {
  const { authUser } = React.useContext(AuthContext) as AuthContextType;

  const [userAvatar, setUserAvatar] = useState<string | any>("");
  const [previewImage, setPreviewImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageUploadId, setImageUploadId] = useState("");
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!userAvatar) {
      setPreviewImage("");
      return;
    }

    const objectUrl = URL.createObjectURL(userAvatar);
    setPreviewImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [userAvatar]);

  const openFileInput = () => {
    hiddenFileInput.current?.click();
  };

  const isValidFileUploaded = (file: File) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const { files } = e.currentTarget;

    if (!files || !files[0]) {
      setErrorMessage("No file selected");
      return;
    }

    if (isValidFileUploaded(files[0])) {
      setUserAvatar(files[0]);

      const formData = new FormData();
      formData.append("image", files[0] as File);
      const response = await uploadImage(formData);

      if (response.status === "Success") {
        setImageUploadId(response.data._id);
        toast.success("Image Uploaded Successfully");
        return;
      }

      toast.error(response.data.message);
      setErrorMessage("");
      return;
    }

    setErrorMessage("File not accepted");
  };

  const validateSelectedFileSize = () => {
    const MAX_FILE_SIZE = 5120; // 5MB

    if (!userAvatar) {
      setErrorMessage("Please choose a file");
      return;
    }

    const fileSizeKiloBytes = Number(userAvatar.size / 1024);

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMessage("File size is greater than maximum limit");
      return;
    }

    setErrorMessage("");
  };

  return (
    <div className="border border-light-gray rounded-md w-full px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="flex space-x-5 items-center">
          <div className="w-16 h-16">
            {previewImage ? (
              <img
                src={previewImage}
                alt=""
                className="rounded-full w-full h-full"
              />
            ) : (
              <img src={"/admin_avatar.png"} alt="" className="w-full h-full" />
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg">{authUser?.user?.name}</h1>

            <form>
              <CustomInput
                id="bankLogo"
                className="hidden"
                inputProps={{
                  type: "file",
                  placeholder: "Upload logo",
                  name: "userAvatar",
                  onChange: handleFileChange,
                  ref: hiddenFileInput,
                }}
              />

              {errorMessage && (
                <p className="text-sm text-start text-red">
                  {errorMessage}
                </p>
              )}

              <CustomBtn
                type="button"
                onClick={openFileInput}
                className="border-none text-blue capitalize"
              >
                change avatar
              </CustomBtn>
            </form>
          </div>
        </div>

        <div className="">
          <p className="bg-blue text-white capitalize py-1 px-3 rounded-lg">
            premium membership
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
