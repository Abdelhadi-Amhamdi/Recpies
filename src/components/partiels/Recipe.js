import React, { useEffect , useState } from "react";

const Recipe = ({ data, inPange, addFav, setAdf, setShow }) => {

  const [ff, setff] = useState({})


  useEffect(() => {
    if (addFav === true) {
      
      const setItLoacaly = () => {
        let Favs = [];
        const item = window.localStorage.getItem("favs");
        if (item){
          Favs = JSON.parse(localStorage.getItem("favs"));
        }
        Favs.unshift(ff);
        localStorage.setItem("favs", JSON.stringify(Favs));
      }


      setItLoacaly();
      setAdf(false);
    }
  }, [addFav, setAdf , ff]);

  return (
    <div className="recipes">
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={item.recipe.image} alt="RecImg"/>
                <div className="buttons">
                  <h1>{item.recipe.label}</h1>
                  <div
                    className="btn"
                    onClick={() => {
                      setAdf(true);
                      setff(item.recipe)
                    }}
                  >
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <div
                    className="btn show"
                    onClick={() => {
                      inPange(2);
                      setShow({
                        id: 6,
                        title: item.recipe.label,
                        image: item.recipe.image,
                        ma9adir : item.recipe.ingredientLines
                      });
                    }}
                  >
                    <i class="fa fa-book" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
