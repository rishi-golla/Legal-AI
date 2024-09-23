
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
    return (
        <div className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <h2 className="text-white mt-10 mb-8 text-5xl font-bold ">Pay once, use forever</h2>
                

                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>

                <div className="flex justify-center mt-10">
                    <a
                        className="cursor-pointer text-white text-xs font-code font-bold tracking-wider uppercase"
                        
                    >
                        See the full details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
