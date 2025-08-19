import { useState, forwardRef } from "react";
import IInputComponentParams from "../interfaces/parametrs/IInputComponentParams";
import "../styles/index.css";
export const InputComponent = forwardRef<
  HTMLInputElement,
  IInputComponentParams
>((params, ref) => {
  const [noValidText, setNoValidText] = useState<string>("");

  function onChangeFun(
    e: React.ChangeEvent<HTMLInputElement | undefined>
  ): void {
    params.beforeValidationFun?.(e);
    if (params.validatorFun == null && noValidText == null) return;

    if (params.validatorFun?.(e.target.value)) {
      params.validatedFun?.();
      setNoValidText("");
      console.log();
    } else {
      setNoValidText(params.invalidText ?? "");
      params.invalidatedFun?.();
    }
  }

  return (
    <div>
      <label htmlFor={params.id} {...params.labelOtherProps}>
        {params.labelText}
      </label>
      <input
        id={params.id}
        type={params.inputType}
        onChange={(e) => onChangeFun(e)}
        ref={ref}
        {...params.inputOtherProps}
      />
      <p className="error-text">{noValidText}</p>
    </div>
  );
});
