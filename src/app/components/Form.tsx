// import { useForm } from "react-hook-form";
// import FormField from "./FormField";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FormData, UserSchema, ValidFieldNames } from "@/types";  
// import axios from "axios";

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<FormData>({
//     resolver: zodResolver(UserSchema), // Apply the zodResolver
//   });

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await axios.post("/api/form", data); // Make a POST request
//       const { errors = {} } = response.data; // Destructure the 'errors' property from the response data

//       // Define a mapping between server-side field names and their corresponding client-side names
//       const fieldErrorMapping: Record<string, ValidFieldNames> = {
//         email: "email",
//         githubUrl: "githubUrl",
//         yearsOfExperience: "yearsOfExperience",
//         password: "password",
//         confirmPassword: "confirmPassword",
//       };

//       // Find the first field with an error in the response data
//       const fieldWithError = Object.keys(fieldErrorMapping).find(
//         (field) => errors[field]
//       );

//       // If a field with an error is found, update the form error state using setError
//       if (fieldWithError) {
//         // Use the ValidFieldNames type to ensure the correct field names
//         setError(fieldErrorMapping[fieldWithError], {
//           type: "server",
//           message: errors[fieldWithError],
//         });
//       }
//     } catch (error) {
//       alert("Submitting form failed!");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-lg mx-auto p-6 bg-white shadow-xl shadow-black rounded-lg"
//     >
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
//         Zod & React-Hook-Form
//       </h1>

//       <div className="grid gap-6">
//         <FormField
//           type="email"
//           placeholder="Email"
//           name="email"
//           register={register}
//           error={errors.email}
//         />

//         <FormField
//           type="text"
//           placeholder="GitHub URL"
//           name="githubUrl"
//           register={register}
//           error={errors.githubUrl}
//         />

//         <FormField
//           type="number"
//           placeholder="Years of Experience (1 - 10)"
//           name="yearsOfExperience"
//           register={register}
//           error={errors.yearsOfExperience}
//           valueAsNumber
//         />

//         <FormField
//           type="password"
//           placeholder="Password"
//           name="password"
//           register={register}
//           error={errors.password}
//         />

//         <FormField
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           register={register}
//           error={errors.confirmPassword}
//         />

//         <button
//           type="submit"
//           className="w-full py-3 px-4 text-white font-semibold bg-black rounded-lg shadow-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Form;

import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, UserSchema, ValidFieldNames } from "@/types";
import axios from "axios";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/form", data);
      const { errors = {} } = response.data;

      const fieldErrorMapping: Record<string, ValidFieldNames> = {
        email: "email",
        githubUrl: "githubUrl",
        yearsOfExperience: "yearsOfExperience",
        password: "password",
        confirmPassword: "confirmPassword",
      };

      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => errors[field]
      );

      if (fieldWithError) {
        setError(fieldErrorMapping[fieldWithError], {
          type: "server",
          message: errors[fieldWithError],
        });
      }
    } catch (error) {
      alert("Submitting form failed!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-pink-50 shadow-lg shadow-pink-200 rounded-lg border border-pink-200"
    >
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Zod & React-Hook-Form
      </h1>

      <div className="grid gap-6">
        <FormField
          type="email"
          placeholder="Enter your email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormField
          type="text"
          placeholder="GitHub Profile URL"
          name="githubUrl"
          register={register}
          error={errors.githubUrl}
        />

        <FormField
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="yearsOfExperience"
          register={register}
          error={errors.yearsOfExperience}
          valueAsNumber
        />

        <FormField
          type="password"
          placeholder="Create a Password"
          name="password"
          register={register}
          error={errors.password}
        />

        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full py-3 px-4 text-white font-semibold bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;

