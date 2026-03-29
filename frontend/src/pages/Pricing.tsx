import PricingSection from "../components/sections/PricingSection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Pricing = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="pt-8">
                <Navbar />
            </div>
            <PricingSection />
            <Footer />
        </div>
    )
}
export default Pricing;