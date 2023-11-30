import Input from './Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex mt-[100px] justify-center w-full">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-[50%] p-[20px] bg-gradient-to-r from-slate-200 to-slate-300 flex flex-col gap-4 border-[1px] rounded-[16px] h-fit"
      >
        <h1 className="font-bold text-[24px] text-gray-500">Sign Up Form</h1>
        <Input
          id="username"
          type="text"
          placeholder="username"
          label="Enter Username"
          register={{ ...register('username') }}
          errorMessage={errors.username?.message}
        />
        <Input
          id="phoneNumber"
          type="text"
          placeholder="Enter Phone Number"
          label="Phone Number"
          register={{ ...register('phoneNumber') }}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          id="email"
          type="email"
          placeholder="Enter Email"
          label="Email"
          register={{ ...register('email') }}
          errorMessage={errors.email?.message}
        />
        <Input
          id="password"
          type="password"
          placeholder="Enter Password"
          label="Password"
          register={{ ...register('password') }}
          errorMessage={errors.password?.message}
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Passowrd"
          label="Confirm Password"
          register={{ ...register('confirmPassword') }}
          errorMessage={errors.confirmPassword?.message}
        />
        <button className="w-full h-[50px] bg-blue-300 text-white text-sm rounded-[8px]">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;
