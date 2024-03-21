import React, { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  helperText?: string;
};

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "", className = "", helperText = "", ...props }, ref) => {
    return (
      <div className="group relative z-0 mb-5 w-full">
        <input
          type={type}
          className={className}
          placeholder=" "
          ref={ref}
          {...props}
          required
        />
        <label className="transhtmlForm absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
          Insirir {type}
        </label>
        {helperText.length > 0 && (
          <span className="text-red-600">{helperText}</span>
        )}
      </div>
    );
  },
);
