import BestItem from "../components/BestItem";
import CollectionWrap from "../components/CollectionWrap";
import Footer from "../components/Footer";
import InterView from "../components/InterView";
import MainBanner from "../components/MainBanner";
import MainBottom from "../components/MainBottom";
import SpecialItem from "../components/SpecialItem";


function Home(){
    return(
        <main className="home">
            <MainBanner />
            <CollectionWrap />
            <BestItem />
            <SpecialItem />
            <InterView />
            <MainBottom />
            <Footer />
        </main>
    )
}

export default Home;