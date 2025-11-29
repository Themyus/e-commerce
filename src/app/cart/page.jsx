import CartPageClient from "./CartPageClient";

export const metadata = {
  title: "E-Commerce | Cart",
  description: "Shopping cart with your selected products",
  openGraph: {
    title: "E-Commerce - Cart",
    description: "Review and manage your shopping cart",
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
