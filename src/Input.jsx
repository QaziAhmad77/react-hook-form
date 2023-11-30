/* eslint-disable react/prop-types */
export default function Input({
  placeholder,
  label,
  id,
  type,
  register,
  errorMessage,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[16px] text-gray-500 font-semibold" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border-[1px] border-gray-300  px-2 py-[14px] rounded-[8px]"
        {...register}
      />
      <span className="text-red-400">{errorMessage}</span>
    </div>
  );
}
