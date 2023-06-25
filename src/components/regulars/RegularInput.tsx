import { IonInput } from "@ionic/react";
import React from "react";

//This input component takes four props, three of which is mandatory.
//The changeCallBack function will be set in the page where it is implemented, and is used to update our Beer object when user types
type Props = {
  value: string | number;
  placeholder?: string;
  label: string;
  changeCallback: React.Dispatch<React.SetStateAction<string>>;
};

const RegularInput: React.FC<Props> = ({
  value,
  placeholder = "",
  label,
  changeCallback,
}) => {
  return (
    <>
      <IonInput
        label={label}
        value={value}
        labelPlacement="floating"
        fill="outline"
        placeholder={placeholder}
        onIonChange={(e) => changeCallback(e.detail.value ?? "")}
        type={"text"}
        className="w-[13rem]"
      />
    </>
  );
};

export default RegularInput;
