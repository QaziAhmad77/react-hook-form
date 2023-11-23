export default function Input({ placeholder, label, id, type }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[16px] text-gray-500 font-semibold" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border-[1px] border-gray-300  px-2 py-2 rounded-[8px]"
      />
    </div>
  );
}
