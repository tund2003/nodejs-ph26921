import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  FormGroup,
  Button,
} from "@material-ui/core";
import { addProduct } from "../service/api";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  price: 0,
  description: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialValue);
  const { name, price, description } = product;

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);
  };

  const addProductDetails = async () => {
    await addProduct(product);
    history.push("/all");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Add Product
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Price</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="price"
              value={price}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Description</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="description"
              value={description}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => addProductDetails()}
              color="primary"
              align="center"
            >
              Add Product
            </Button>
            <Button
              onClick={() => history.push("/all")}
              variant="contained"
              color="secondary"
              align="center"
              style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default AddProduct;
