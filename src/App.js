import React, { useState, useEffect, useTransition } from "react";
import LeftNavBar from "./Components/leftnavbar";
import PanelHeader from "./Components/panelheader";
import PanelNav from "./Components/panelnav";
import Footer from "./Components/footer";
import "./App.css";
import ReactLoading from "react-loading";
import { FlashAutoOutlined } from "@mui/icons-material";
import Board from "./Components/Board";
import { flex } from "@xstyled/styled-components";

function App() {
  const [Users, setUsers] = useState({});
  const [filteredResults, setFilteredResults] = useState(Users);
  const [searchInput, setSearchInput] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=30";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const randomuser = json.results;
        setUsers({
          Open: randomuser.slice(0, 7),
          Contacted: randomuser.slice(7, 10),
          Techincal: randomuser.slice(10, 15),
          Culture: randomuser.slice(17, 24),
          Written: randomuser.slice(26, 28),
        });
        setFilteredResults({
          Open: randomuser.slice(0, 7),
          Contacted: randomuser.slice(7, 10),
          Techincal: randomuser.slice(10, 15),
          Culture: randomuser.slice(17, 24),
          Written: randomuser.slice(26, 28),
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    let result = {};
    if (searchValue !== "") {
      const groupList = Object.keys(Users);
      groupList?.forEach((item) => {
        console.log("item", item);
        const arr = Users[item].filter((data) => {
          return data.name.first
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        result[item] = arr;
      });
    } else {
      setFilteredResults(Users);
    }
    setFilteredResults(result);
  };

  return (
    <div className="main-container">
      {isLoading && (
        <ReactLoading
          type="spin"
          color="#000"
          height={"10%"}
          width={"10%"}
          delay={300}
        />
      )}
      {!isLoading && (
        <>
          <div className="left-nav">
            <LeftNavBar />
          </div>
          <div className="right-nav">
            <div className="panel-header">
              <PanelHeader
                searchItems={searchItems}
                searchInput={searchInput}
              />
            </div>
            <div className="panel-nav">
              <PanelNav />
            </div>
            {/* <div className='dnd-content'>
          {filteredResults.map((data) =>(
          <DndContent data={data} />
          ))}
     
        </div> */}
            <div className="dnd-content">
              {/* {loading ? <div>Loading...</div> : <DndContent users={Users} />} */}
              {isLoading && <ReactLoading type="bars" color="#000" />}
              {!isLoading && <Board initial={filteredResults} />}
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
