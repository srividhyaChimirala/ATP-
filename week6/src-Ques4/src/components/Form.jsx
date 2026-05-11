import { useForm } from 'react-hook-form'
import { useState } from 'react'

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // State
  const [users, setUsers] = useState([])

  // Form submit
  const onFormSubmit = (obj) => {
    console.log(obj)
    setUsers([...users, obj])
  }

  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center">User Form</h1>

      <form
        className="max-w-md mt-10 mx-auto"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="firstname">Name</label>

          <input
            type="text"
            id="firstname"
            placeholder="Name"
            {...register('firstname', {
              required: 'Name Required',
              validate: (v) =>
                v.trim().length !== 0 || 'White space is not valid',
            })}
            className="border w-full p-4"
          />

          {errors.firstname?.type === 'required' && (
            <p className="text-red-600">{errors.firstname.message}</p>
          )}

          {errors.firstname?.type === 'validate' && (
            <p className="text-red-600">{errors.firstname.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email Required',
              validate: (v) =>
                v.trim().length !== 0 || 'White space is not valid',
            })}
            className="border w-full p-4"
          />

          {errors.email?.type === 'required' && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          {errors.email?.type === 'validate' && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Date Of Birth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth">Date Of Birth</label>

          <input
            type="date"
            id="dateOfBirth"
            {...register('dateOfBirth', {
              required: 'Date Of Birth Required',
              validate: (v) =>
                v.trim().length !== 0 || 'White space is not valid',
            })}
            className="border w-full p-4"
          />

          {errors.dateOfBirth?.type === 'required' && (
            <p className="text-red-600">{errors.dateOfBirth.message}</p>
          )}

          {errors.dateOfBirth?.type === 'validate' && (
            <p className="text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            className="border block mx-auto p-3 bg-green-500 text-white"
            type="submit"
            id="submit"
          >
            Add User
          </button>
        </div>
      </form>

      {/* User Table */}
      <div>
        <table className="border mt-5 mx-auto">
          <thead>
            <tr>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Date Of Birth</th>
            </tr>
          </thead>

          <tbody>
            {users.map((userObj, index) => (
              <tr key={index}>
                <td className="border p-2">{userObj.firstname}</td>
                <td className="border p-2">{userObj.email}</td>
                <td className="border p-2">{userObj.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Form

