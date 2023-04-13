import React, { useEffect, useState } from "react";
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
import { editProduct, getallProducts } from "../service/api.js";
import { useHistory, useParams } from "react-router-dom";

const initialValue = {
  name: "",
  price: 0,
  description: "",
};

const EditProduct = () => {
  const [product, setProduct] = useState(initialValue);
  const { name, price, description } = product;
  const { id } = useParams();

  useEffect(() => {
    loadProductData();
  }, []);

  const loadProductData = async () => {
    const response = await getallProducts(id);
    setProduct(response.data);
  };

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);
  };

  const editProductDetails = async () => {
    await editProduct(id, product);
    history.push("/all");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Update Product Details
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
            <InputLabel>Product Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="price"
              value={price}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Email address</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="description"
              value={description}
            />
          </FormControl>

          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => editProductDetails()}
              color="primary"
              align="center"
            >
              Update Product
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

export default EditProduct;
