import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import Image from "react-async-image";

export default function Images({ itemData }) {
  /** The Array of Image to be rendered in display once item is expanded, filled with objects,
   * including the img src, as the value of key img.
   */
  // const imagesArray = [];
  const imagesArray = [
    {
      id: 1,
      img: "https://img.joomcdn.net/3936fa3e342172b935c711cc9f44f89aced1a213_original.jpeg",
    },
    {
      id: 2,
      img: "https://img.joomcdn.net/36b27244d2958531575a8c0b7066f0d25c488cf2_400_400.jpeg",
    },
    {
      id: 3,
      img: "https://img.joomcdn.net/dd88de9201d9b76a84e32639befd2173ccff27c0_400_400.jpeg",
    },
    {
      id: 4,
      img: "https://img.joomcdn.net/47fbd5bce2d76963a50e5cad2750e5eb03a07cf4_400_400.jpeg",
    },
  ];
  /** To transform the array of Strings, the additional images value, to an array of objects,
   *containingg each img as key and the value as its string.
   */
  // itemData.split(",").forEach((x) => imagesArray.push({ img: x }));
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={imagesArray.length}>
      {imagesArray.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSets={item.img}
            alt={item.img}
            className="image"
            loading="lazy"
          />
          {/* <img
            src={
              "https://img.joomcdn.net/3936fa3e342172b935c711cc9f44f89aced1a213_original.jpeg"
            }
            srcSet={`https://img.joomcdn.net/3936fa3e342172b935c711cc9f44f89aced1a213_original.jpeg`}
            alt={item.img}
            className="image"
            loading="lazy"
          /> */}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
