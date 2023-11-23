import Input from './Input';

const App = () => {
  return (
    <div className="flex mt-[100px] justify-center w-full">
      <form className="w-[50%] p-[20px] bg-gradient-to-r from-slate-200 to-slate-300 flex flex-col gap-4 border-[1px] rounded-[16px] h-fit">
        <Input
          id="username"
          type="text"
          placeholder="username"
          label="Enter Username"
        />
        <Input
          id="phoneNumber"
          type="text"
          placeholder="Enter Phone Number"
          label="Phone Number"
        />
        <Input
          id="email"
          type="email"
          placeholder="Enter Email"
          label="Email"
        />
        <Input
          id="password"
          type="password"
          placeholder="Enter Password"
          label="Password"
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Passowrd"
          label="Confirm Password"
        />
      </form>
    </div>
  );
};

export default App;
