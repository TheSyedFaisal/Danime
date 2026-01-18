export type Size =
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "30"
  | "32"
  | "34"
  | "36"
  | "Standard"
  | "Small"
  | "Mini";

export interface Product {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  bestSeller: boolean;
  sizes: Size[];
  description: string;
  images: string[];
}

export interface Card {
  id: number;
  title: string;
  slug: string;
  image: string;
  products: Product[];
}

export const cards: Card[] = [
  {
    id: 1,
    title: "JACKETS",
    slug: "jackets",
    image: "/jacket.jpg",
    products: [
      {
        id: 1,
        title: "Winter Jacket",
        price: 8500,
        discountPrice: 6999,
        bestSeller: true,
        sizes: ["S", "M", "L", "XL"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-jackets.png"],
      },
      {
        id: 2,
        title: "Leather Jacket",
        price: 12000,
        bestSeller: false,
        sizes: ["M", "L", "XL"],
        description: "Genuine leather jacket with a modern slim fit design.",
        images: ["/products/collections-jackets.png"],
      },
      {
        id: 3,
        title: "Denim Jacket",
        price: 6500,
        discountPrice: 5499,
        bestSeller: true,
        sizes: ["S", "M", "L"],
        description: "Stylish denim jacket perfect for casual everyday wear.",
        images: ["/products/collections-jackets.png"],
      },
      {
        id: 4,
        title: "Puffer Jacket",
        price: 9000,
        bestSeller: false,
        sizes: ["M", "L", "XL"],
        description:
          "Lightweight puffer jacket designed for extreme cold weather.",
        images: ["/products/collections-jackets.png"],
      },
      {
        id: 5,
        title: "Bomber Jacket",
        price: 7200,
        bestSeller: true,
        sizes: ["S", "M", "L", "XL"],
        description: "Classic bomber jacket for stylish casual look.",
        images: ["/products/collections-jackets.png"],
      },
    ],
  },
  {
    id: 2,
    title: "TOTE BAGS",
    slug: "bags",
    image: "/bags.jpg",
    products: [
      {
        id: 1,
        title: "Canvas Tote",
        price: 2800,
        bestSeller: true,
        sizes: ["Standard"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-bag.png"],
      },
      {
        id: 2,
        title: "Leather Tote",
        price: 7500,
        discountPrice: 6499,
        bestSeller: true,
        sizes: ["Standard"],
        description: "Premium leather tote bag with spacious compartments.",
        images: ["/products/collections-bag.png"],
      },
      {
        id: 3,
        title: "Office Tote",
        price: 4200,
        bestSeller: false,
        sizes: ["Standard"],
        description: "Perfect tote bag for office and daily essentials.",
        images: ["/products/collections-bag.png"],
      },
      {
        id: 4,
        title: "Mini Tote",
        price: 3200,
        bestSeller: false,
        sizes: ["Standard"],
        description: "Trendy mini tote bag for casual outings.",
        images: ["/products/collections-bag.png"],
      },
      {
        id: 5,
        title: "Shopping Tote",
        price: 3600,
        bestSeller: true,
        sizes: ["Standard"],
        description: "Durable shopping tote bag for daily errands.",
        images: ["/products/collections-bag.png"],
      },
    ],
  },
  {
    id: 3,
    title: "JEANS",
    slug: "jeans",
    image: "/jeans.jpg",
    products: [
      {
        id: 1,
        title: "Slim Fit Jeans",
        price: 4800,
        discountPrice: 3999,
        bestSeller: true,
        sizes: ["30", "32", "34", "36"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-jeans.png"],
      },
      {
        id: 2,
        title: "Straight Jeans",
        price: 4500,
        bestSeller: false,
        sizes: ["30", "32", "34", "36"],
        description: "Classic straight jeans for everyday wear.",
        images: ["/products/collections-jeans.png"],
      },
      {
        id: 3,
        title: "Black Jeans",
        price: 5200,
        bestSeller: true,
        sizes: ["32", "34", "36"],
        description: "Stylish black denim jeans with premium finish.",
        images: ["/products/collections-jeans.png"],
      },
      {
        id: 4,
        title: "Ripped Jeans",
        price: 5600,
        bestSeller: false,
        sizes: ["30", "32", "34"],
        description: "Street-style ripped jeans for a bold look.",
        images: ["/products/collections-jeans.png"],
      },
      {
        id: 5,
        title: "Blue Denim Jeans",
        price: 5000,
        bestSeller: true,
        sizes: ["30", "32", "34", "36"],
        description: "Classic blue denim jeans perfect for casual wear.",
        images: ["/products/collections-jeans.png"],
      },
    ],
  },
  {
    id: 4,
    title: "CROCHET DOLL",
    slug: "doll",
    image: "/doll.png",
    products: [
      {
        id: 1,
        title: "Handmade Doll",
        price: 3500,
        bestSeller: true,
        sizes: ["Small"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-doll.png"],
      },
      {
        id: 2,
        title: "Soft Doll",
        price: 3000,
        bestSeller: false,
        sizes: ["Small"],
        description: "Soft cotton crochet doll safe for kids.",
        images: ["/products/collections-doll.png"],
      },
      {
        id: 3,
        title: "Gift Doll",
        price: 3800,
        discountPrice: 3299,
        bestSeller: true,
        sizes: ["Small"],
        description: "Perfect crochet doll for gifting purposes.",
        images: ["/products/collections-doll.png"],
      },
      {
        id: 4,
        title: "Mini Doll",
        price: 2500,
        bestSeller: false,
        sizes: ["Mini"],
        description: "Cute mini crochet doll for decoration.",
        images: ["/products/collections-doll.png"],
      },
      {
        id: 5,
        title: "Colorful Doll",
        price: 3200,
        bestSeller: true,
        sizes: ["Small"],
        description: "Bright colorful crochet doll for kids.",
        images: ["/products/collections-doll.png"],
      },
    ],
  },
];

export const products = [
  {
    id: 1,
    category: "JACKETS",
    name: "DENIM JACKET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet.",
    price: "RS 1500",
    image: "/jacket1.png",
    colors: ["#1a1a2e", "#8b1a1a", "#f5f5f5"],
    sizes: ["L", "M", "S"],
  },
  {
    id: 2,
    category: "JACKETS",
    name: "DENIM JACKET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet.",
    price: "RS 1500",
    image: "/jacket1.png",
    colors: ["#1a1a2e", "#8b1a1a", "#f5f5f5"],
    sizes: ["L", "M", "S"],
  },
  {
    id: 3,
    category: "JACKETS",
    name: "DENIM JACKET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet.",
    price: "RS 1500",
    image: "/jacket1.png",
    colors: ["#1a1a2e", "#8b1a1a", "#f5f5f5"],
    sizes: ["L", "M", "S"],
  },
];

export const footerLinks = [
  {
    id: 1,
    heading: "PRODUCTS",
    links: [
      { text: "All", href: "#" },
      { text: "Jackets", href: "#" },
      { text: "Jeans", href: "#" },
      { text: "Bags", href: "#" },
      { text: "Crochet Dolls", href: "#" },
    ],
  },
  {
    id: 2,
    heading: "ABOUT",
    links: [
      { text: "About Us", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Catalog", href: "#" },
    ],
  },
  {
    id: 3,
    heading: "SUPPORT",
    links: [
      { text: "Account", href: "#" },
      { text: "Payment Method", href: "#" },
      { text: "Returns & Refunds", href: "#" },
      { text: "Deliveries", href: "#" },
      { text: "Terms & Condition", href: "#" },
    ],
  },
  {
    id: 4,
    heading: "OUR SOCIALS",
    links: [
      { text: "Instagram", href: "#" },
      { text: "X", href: "#" },
      { text: "Facebook", href: "#" },
    ],
  },
];
