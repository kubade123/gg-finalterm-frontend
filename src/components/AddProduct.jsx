import axios from "../axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useForm from "../hooks/useForm";

function AddProduct() {
  const { videoId } = useParams();
  const initialState = {
    name: '',
    productLink: '',
    price: 0,
    video: videoId
  };

  const { values, handleChange, resetForm } = useForm(initialState);

  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post(`/products/${videoId}`, values)
      .then(() => {
        resetForm();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <FormContainer>
        <h3>Add Product</h3>

        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </InputContainer>
        <InputContainer>
          <p>Product Image</p>
          <input
            type="text"
            name="productLink"
            onChange={handleChange}
            value={values.productLink}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={values.price}
          />
        </InputContainer>
        
        <Button onClick={addProduct}>Add Product</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;