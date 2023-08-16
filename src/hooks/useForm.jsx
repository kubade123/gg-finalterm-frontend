import { useState } from 'react';

function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(e.target.value)
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { values, handleChange, resetForm };
}

export default useForm;