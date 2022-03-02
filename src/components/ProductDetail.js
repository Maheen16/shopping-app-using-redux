import { Button, Grid, Rating, Typography, Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  removeSelectedProducts,
  selectedProduct,
} from "../redux-container/actions/productActions";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CircularProgress from "@mui/material/CircularProgress";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Redeem, ShoppingBasket } from "@mui/icons-material";
const ProductDetail = () => {
  const product = useSelector((state) => state.selectedProduct);
  const [value, setValue] = useState(2);

  const dispatch = useDispatch();
  console.log(product);

  const { productId } = useParams();

  // console.log(productId);

  const fetchSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchSingleProduct();
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <>
      <Grid container sx={{ mt: 4 }}>
        {Object.keys(product).length === 0 ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "65vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                width="50%"
                height="100%"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: "23px", fontaWeight: "bold", mb: 2 }}>
                {product.title}
              </Typography>
              <Typography sx={{ mb: 2 }}> {product.description}</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                sx={{ mb: 2 }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography sx={{ fontSize: "23px", color: "#2F3A4C" }}>
                Only in $ :{product.price}
              </Typography>
              <Typography
                sx={{ fontSize: "17px", color: "#a31545", mt: 2, mb: 2 }}
              >
                Select Payment method
              </Typography>
              <Grid container>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#e91e63",
                  }}
                >
                  <AddShoppingCartIcon />
                  <Typography>Cash on Delievery</Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#e91e63",
                  }}
                >
                  <AccountBalanceIcon />
                  <Typography>Net Banking</Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#e91e63",
                    alignItems: "center",
                  }}
                >
                  <CreditCardIcon />
                  <Typography>Credit Card</Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#e91e63",
                    alignItems: "center",
                  }}
                >
                  <AddCardIcon />
                  <Typography>Debit Card</Typography>
                </Grid>
              </Grid>
              <Button
                color="secondary"
                endIcon={<ShoppingBasket />}
                variant="contained"
                sx={{ mt: 3, backgroundColor: "#a31545" }}
              >
                Add to Cart
              </Button>
              <Button
                color="secondary"
                endIcon={<Redeem />}
                variant="contained"
                sx={{ mt: 3, ml: 3, backgroundColor: "#a31545" }}
              >
                Add to Wishlist
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default ProductDetail;
