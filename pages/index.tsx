import Brands from "@/app/components/brands/brands";
import CustomCarousel from "@/app/components/carousel/carousel";
import Header from "@/app/components/nav-bar/header";
import NotableProducts from "@/app/components/notable-products/notable-offers";
import ProductsCarousel from "@/app/components/main-products/products-carousel";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div>
      <div className="h-full relative">
        <Header />
        <CustomCarousel />
      </div>
      <div className="mt-36">
        <ProductsCarousel
          title="Special Offers"
          itemsNumber={9}
          itemsToShow={5}
        />
      </div>
      <Brands />
      <NotableProducts />
      <ProductsCarousel
        title="The most viewed products"
        itemsNumber={10}
        itemsToShow={5}
      />
      <ProductsCarousel
        title="Products that just arrived"
        itemsNumber={12}
        itemsToShow={6}
      />
      <Footer />
    </div>
  );
}
