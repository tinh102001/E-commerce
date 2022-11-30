import Header from "../components/headers/homepage/header";
import Products from "../components/mains/products/product";
import AdCarousel from "../components/mains/utils/advertisement/carousel";

function HomePage() {
    return (
        <>
            <Header></Header>
            <AdCarousel></AdCarousel>
            <Products></Products>
        </>
    );
}

export default HomePage;