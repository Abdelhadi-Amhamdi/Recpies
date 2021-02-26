import React, { useState, useEffect , useRef } from "react";
import Services from "./services";
import Slider from "./slide";
import Recipes from "./Recipe";
import Favourites from "./fav";
import axios from "axios";
import Show from "./showRec";
import BtnSwitch from './switchBtn'

const Slide = () => {
  const Key = "f620b1f5a30235a91c5c927ac44623b4";
  const App_id = "3bef46a7";

  const [addFav, setaddFav] = useState(false);
  const favs = useRef()

  const [indexPage, setindexPage] = useState(0);
  const [query, setquery] = useState("egg");
  const [recipesData, setrecpies] = useState([]);
  const [searchT, setsearchT] = useState("");
  const [showItem, setshowItem] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${Key}`
      )
      .then((res) => {
        setrecpies(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query , setquery]);

  function search() {
    setquery(searchT);
    setindexPage(1);
  }

  function showFavs(){
    // console.log(favs.current.className)
  }

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-9" id="content">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setsearchT(e.target.value)}
              placeholder="search..."
            />
            <div  className="btn" onClick={search}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div  className="btn" id="bars" onClick={showFavs}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          {indexPage === 0 ? (
            <div className="page1">
              <Slider /> <Services />
              <BtnSwitch pindex={indexPage} setpindex={setindexPage}/>
            </div>
          ) : indexPage === 1 ? (
            <>
              <Recipes
                data={recipesData}
                inPange={setindexPage}
                addFav={addFav}
                setAdf={setaddFav}
                setShow={setshowItem}
              />
              <BtnSwitch pindex={indexPage} setpindex={setindexPage} />
            </>
          ) : (
            <>
            <Show data={showItem} />
            <BtnSwitch pindex={indexPage} setpindex={setindexPage} />
            </>
          )}
        </div>
        <div className="col-md-3" id="user">
          <div className="fav" ref={favs}>
            <h1>Your Favourite Recipes</h1>
            <Favourites added={addFav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
