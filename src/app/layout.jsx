import "./globals.css";
import Header from "./components/Header";
import { CartContext, CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  // O export default pode ser colocado já junto da função, pra ficar mais legível de que ela é a função Pai
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}