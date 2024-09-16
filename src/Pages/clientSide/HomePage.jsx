import Banner from "../../components/clientSide/Banner/Banner";
import FolloeInstragram from "../../components/clientSide/FolloeInstragram/FolloeInstragram";
import PopularProducts from "../../components/clientSide/PopularProdusts/PopularProducts";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <FolloeInstragram></FolloeInstragram>
            
        </div>
    );
};

export default HomePage;