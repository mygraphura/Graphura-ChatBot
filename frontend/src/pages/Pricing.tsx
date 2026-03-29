import PricingSection from "../components/sections/PricingSection";
import Navbar from "../components/layout/Navbar";
import FooterEnhanced from "../components/layout/FooterEnhanced";

const Pricing = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="pt-8">
                <Navbar />
            </div>
            <PricingSection />
            <FooterEnhanced />
        </div>
    )
}
export default Pricing;