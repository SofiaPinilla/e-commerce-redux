import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike, getProducts } from "../../features/products/productsSlice";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeartCircleBolt,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {products.map((product) => {
        const isAlreadyLiked = product.likes.includes(user?._id);

        return (
          <Card key={product._id} marginTop={5}>
            <CardHeader>
              <Heading size="md">{product.name}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Price
                  </Heading>
                  <Text pt="2" fontSize="md">
                    {product.price} €
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Likes
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {product.likes.length}
                    {isAlreadyLiked ? (
                      <FontAwesomeIcon icon={faHeartCircleCheck} onClick={()=>console.log("dislike")} />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} onClick={()=>dispatch(addLike(product._id))} />
                    )}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Reviews
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {product.reviews.length}{" "}
                    <FontAwesomeIcon icon={faComments} />
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
