import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList() {
//   const [todo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(todo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

interface IForm {
  email: string;
  fristName: string;
  lastName: string;
  userName: string;
  password: string;
  passwordConfirmation: string;
  extraError?: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirmation) {
      return setError("passwordConfirmation", {
        message: "password are not the same",
      });
    }
    //전체 폼 해당
    setError("extraError", { message: "Server offline" });
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          margin: "200px auto",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is requred",
            pattern: {
              value: /^[A-Za-z0-9._%+=]+@naver.com$/,
              message: "Only naver.com emails  allowed",
            },
          })}
          placeholder="Email"
        />
        {/* 그냥 erros.email.message 는 error가 난다 처음에는 errors 안에 아무것도 없기 때문에 그래서 밑에처럼 처리해줌.*/}
        <span style={{ color: "#fff" }}>{errors?.email?.message}</span>
        <input
          {...register("fristName", {
            required: "Frist Name is requred",
            validate: {
              noAdmin: (value) =>
                value.includes("admin") ? "no admin allowed" : true, //admin이 포함되면 false 반환
              noSibal: async (
                value //비동기로 어떤것을 할수 있다.
              ) => (value.includes("sibal") ? "no sibal allowed" : true),
            },
          })}
          placeholder="Frist Name"
        />
        <span style={{ color: "#fff" }}>{errors?.fristName?.message}</span>
        <input
          {...register("lastName", { required: "Last Name is requred" })}
          placeholder="Last Name"
        />
        <span style={{ color: "#fff" }}>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "UserName is requred",
            minLength: {
              value: 5,
              message: "5글자 이상으로 써",
            },
          })}
          placeholder="UserName"
        />
        <span style={{ color: "#fff" }}>{errors?.userName?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password"
        />
        <span style={{ color: "#fff" }}>{errors?.password?.message}</span>
        <input
          {...register("passwordConfirmation")}
          placeholder="Password Confirmation"
        />
        <span style={{ color: "#fff" }}>
          {errors?.passwordConfirmation?.message}
        </span>
        <button>Add</button>
        {errors?.extraError?.message}
      </form>
    </div>
  );
}

export default TodoList;
