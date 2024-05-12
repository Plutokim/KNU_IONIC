import { ComponentType } from "react";
import DateValidator from "../classes/Validators/Date";
import GenderValidator from "../classes/Validators/Gender";

export type WithInjectedValidators = {
  validateDate: (d: Date) => boolean;
  validateGender: (g: string) => boolean;
};

const withValidators = <P extends WithInjectedValidators>(
  Component: ComponentType<P>
) => {
  const HOC = (props: Omit<P, keyof WithInjectedValidators>) => {
    const dateValidator = new DateValidator();
    const genderValidator = new GenderValidator();
    return (
      <Component
        {...(props as P)}
        validateDate={dateValidator.validate}
        validateGender={genderValidator.validate}
      />
    );
  };

  return HOC;
};

export default withValidators;
