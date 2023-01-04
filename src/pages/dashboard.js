//import axios from "axios";
import { useEffect, useState } from "react";
import TopButton from "../components/Common/BackToTop/topButton";
import Header from "../components/Common/Header/header";
import Loader from "../components/Common/Loader/loader";
import PaginationComponent from "../components/Dashboard/Pagination/pagination";
import SearchComponent from "../components/Dashboard/Search/search";
import TabsComponent from "../components/Dashboard/Tabs/tabs";
import Footer from "../components/Common/Footer/footer";
import { get100Coins } from "../functions/get100Coins";

function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  
  const handlePageChange = (event, value) => {
   // console.log("Page number1 ", value);
    setPageNumber(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // Call the API and get the data
    setLoading(true);
    const data = await get100Coins();
    if (data) {
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
      setLoading(false);
    }
  };

  return (
    <>
      <TopButton />
      {loading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          <Header />
          <SearchComponent search={search} onChange={onChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default DashboardPage;