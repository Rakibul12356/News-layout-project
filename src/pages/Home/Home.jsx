import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftsideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const newsData = useLoaderData();
    console.log(newsData)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {/**lay out start*/}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/**news container */}
                <div className="col-span-2 ">
                    <h2 className="text-4xl">Dragon News Home</h2>
                    {
                        newsData.map(aNews=><NewsCard key={aNews.id} news={aNews} ></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;