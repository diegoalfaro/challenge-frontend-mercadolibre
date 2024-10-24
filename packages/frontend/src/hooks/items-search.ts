import { useEffect, useState } from "react";

export const useItemsSearch = (query: string) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [query]);

  const items = [
    {
      id: 313123,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut mollis lectus, rutrum molestie ex. Cras maximus blandit nunc scelerisque commodo. Quisque mattis porttitor augue, eu vehicula justo vestibulum nec. Maecenas tellus lectus, varius et odio at, commodo",
      price: 4344,
      imgSrc:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses-1036x780.jpg",
      place: "Capital Federal",
    },
    {
      id: 343,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut mollis lectus, rutrum molestie ex. Cras maximus blandit nunc scelerisque commodo. Quisque mattis porttitor augue, eu vehicula justo vestibulum nec. Maecenas tellus lectus, varius et odio at, commodo",
      price: 4344,
      imgSrc:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses-1036x780.jpg",
      place: "Capital Federal",
    },
    {
      id: 2343,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut mollis lectus, rutrum molestie ex. Cras maximus blandit nunc scelerisque commodo. Quisque mattis porttitor augue, eu vehicula justo vestibulum nec. Maecenas tellus lectus, varius et odio at, commodo",
      price: 4344,
      imgSrc:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses-1036x780.jpg",
      place: "Capital Federal",
    },
    {
      id: 313123,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut mollis lectus, rutrum molestie ex. Cras maximus blandit nunc scelerisque commodo. Quisque mattis porttitor augue, eu vehicula justo vestibulum nec. Maecenas tellus lectus, varius et odio at, commodo",
      price: 4344,
      imgSrc:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses-1036x780.jpg",
      place: "Capital Federal",
    },
  ];

  return { loading, items };
};
