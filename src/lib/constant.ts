export interface Product {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  bestSeller: boolean;
  sizes: string[];
  slug: string;
  description: string;
  images: string[];
  productImages: string[];
  videoUrl?: string;
}

export interface CartItem {
  id: string; // unique identifier (productId-size)
  productId: number;
  title: string;
  price: number;
  discountPrice?: number;
  size: string;
  quantity: number;
  image: string;
  slug: string;
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
        slug: "winter-jackets",
        title: "Winter Jacket",
        price: 8500,
        discountPrice: 6999,
        bestSeller: true,
        sizes: ["S", "M", "L", "XL"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-jackets.png"],
        productImages: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        id: 2,
        slug: "Leather-Jacket",
        title: "Leather Jacket",
        price: 12000,
        bestSeller: false,
        sizes: ["M", "L", "XL"],
        description: "Genuine leather jacket with a modern slim fit design.",
        images: ["/products/collections-jackets.png"],
        productImages: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 3,
        slug: "Denim-Jacket",
        title: "Denim Jacket",
        price: 6500,
        discountPrice: 5499,
        bestSeller: true,
        sizes: ["S", "M", "L"],
        description: "Stylish denim jacket perfect for casual everyday wear.",
        images: ["/products/collections-jackets.png"],
        productImages: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 4,
        slug: "Puffer-Jacket",
        title: "Puffer Jacket",
        price: 9000,
        bestSeller: false,
        sizes: ["M", "L", "XL"],
        description:
          "Lightweight puffer jacket designed for extreme cold weather.",
        images: ["/products/collections-jackets.png"],
        productImages: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 5,
        slug: "Bomber-Jacket",
        title: "Bomber Jacket",
        price: 7200,
        bestSeller: true,
        sizes: ["S", "M", "L", "XL"],
        description: "Classic bomber jacket for stylish casual look.",
        images: ["/products/collections-jackets.png"],
        productImages: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop",
        ],
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
        slug: "Canvas-Tote",
        title: "Canvas Tote",
        price: 2800,
        bestSeller: true,
        sizes: ["Standard"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-bag.png"],
        productImages: [
          "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 2,
        slug: "Leather-Tote",
        title: "Leather Tote",
        price: 7500,
        discountPrice: 6499,
        bestSeller: true,
        sizes: ["Standard"],
        description: "Premium leather tote bag with spacious compartments.",
        images: ["/products/collections-bag.png"],
        productImages: [
          "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 3,
        slug: "Office-Tote",
        title: "Office Tote",
        price: 4200,
        bestSeller: false,
        sizes: ["Standard"],
        description: "Perfect tote bag for office and daily essentials.",
        images: ["/products/collections-bag.png"],
        productImages: [
          "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 4,
        slug: "Mini-Tote",
        title: "Mini Tote",
        price: 3200,
        bestSeller: false,
        sizes: ["Standard"],
        description: "Trendy mini tote bag for casual outings.",
        images: ["/products/collections-bag.png"],
        productImages: [
          "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 5,
        slug: "Shopping-Tote",
        title: "Shopping Tote",
        price: 3600,
        bestSeller: true,
        sizes: ["Standard"],
        description: "Durable shopping tote bag for daily errands.",
        images: ["/products/collections-bag.png"],
        productImages: [
          "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=800&fit=crop",
        ],
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
        slug: "Slim-Fit-Jeans",
        title: "Slim Fit Jeans",
        price: 4800,
        discountPrice: 3999,
        bestSeller: true,
        sizes: ["30", "32", "34", "36"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-jeans.png"],
        productImages: [
          "/jeans1.jpg",
          "/jeans2.jpg",
          "/jeans3.jpg",
          "/jeans4.png",
        ],
      },
      {
        id: 2,
        slug: "Straight-Jeans",
        title: "Straight Jeans",
        price: 4500,
        bestSeller: false,
        sizes: ["30", "32", "34", "36"],
        description: "Classic straight jeans for everyday wear.",
        images: ["/products/collections-jeans.png"],
        productImages: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 3,
        slug: "Black-Jeans",
        title: "Black Jeans",
        price: 5200,
        bestSeller: true,
        sizes: ["32", "34", "36"],
        description: "Stylish black denim jeans with premium finish.",
        images: ["/products/collections-jeans.png"],
        productImages: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 4,
        slug: "Ripped-Jeans",
        title: "Ripped Jeans",
        price: 5600,
        bestSeller: false,
        sizes: ["30", "32", "34"],
        description: "Street-style ripped jeans for a bold look.",
        images: ["/products/collections-jeans.png"],
        productImages: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 5,
        slug: "Blue-Denim-Jeans",
        title: "Blue Denim Jeans",
        price: 5000,
        bestSeller: true,
        sizes: ["30", "32", "34", "36"],
        description: "Classic blue denim jeans perfect for casual wear.",
        images: ["/products/collections-jeans.png"],
        productImages: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop",
        ],
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
        slug: "Handmade-Doll",
        title: "Handmade Doll",
        price: 3500,
        bestSeller: true,
        sizes: ["Small"],
        description:
          "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis pulvinar lacus morbi. Volutpat eu elit est commodo at viverra consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis id arcu. ",
        images: ["/products/collections-doll.png"],
        productImages: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1585155770913-82a7cf8f21f7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 2,
        slug: "Soft-Doll",
        title: "Soft Doll",
        price: 3000,
        bestSeller: false,
        sizes: ["Small"],
        description: "Soft cotton crochet doll safe for kids.",
        images: ["/products/collections-doll.png"],
        productImages: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1585155770913-82a7cf8f21f7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 3,
        slug: "Gift-Doll",
        title: "Gift Doll",
        price: 3800,
        discountPrice: 3299,
        bestSeller: true,
        sizes: ["Small"],
        description: "Perfect crochet doll for gifting purposes.",
        images: ["/products/collections-doll.png"],
        productImages: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1585155770913-82a7cf8f21f7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 4,
        slug: "Mini-Doll",
        title: "Mini Doll",
        price: 2500,
        bestSeller: false,
        sizes: ["Mini"],
        description: "Cute mini crochet doll for decoration.",
        images: ["/products/collections-doll.png"],
        productImages: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1585155770913-82a7cf8f21f7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&h=800&fit=crop",
        ],
      },
      {
        id: 5,
        slug: "Colorful-Doll",
        title: "Colorful Doll",
        price: 3200,
        bestSeller: true,
        sizes: ["Small"],
        description: "Bright colorful crochet doll for kids.",
        images: ["/products/collections-doll.png"],
        productImages: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1585155770913-82a7cf8f21f7?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&h=800&fit=crop",
        ],
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
