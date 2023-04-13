import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import { deleteProduct, getallProducts } from "../service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table: {
    width: "80%",
    margin: "50px 100px 100px 140px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#FFFFFF",
      fontSize: "16px",
    },
  },
  trow: {
    "& > *": {
      fontSize: "16px",
    },
  },
});

const AllProducts = () => {
  const classes = useStyle();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getallProducts();
    // console.log(response);
    setProduct(response.data);
  };

  const deleteData = async (id) => {
    await deleteProduct(id);
    getProducts();
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Description</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {product.map((data) => (
          <TableRow key={data.id} className={classes.trow}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell>{data.description}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0px 20px" }}
                component={Link}
                to={`/edit/${data.id}`}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => deleteData(data.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllProducts;
