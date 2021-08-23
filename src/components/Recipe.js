import React from "react";
import { Loader, Container, FlexboxGrid, Col, Divider, Icon } from "rsuite";
import "./Home.css";
import { useState, useEffect, Component } from "react";

import {
  BrowserRouter as Router,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function Recipe({ recipes }) {

  let { url } = useRouteMatch();
  let { resid } = useParams();
  //let person = find(parseInt(id));


  //console.log(url)
  console.log(resid)


  const [recipeDetails, setRecipeDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    fetch("https://cookbook-platform-api.herokuapp.com/recipes/" + resid)
      .then((res) => res.json())
      .then((res) => setRecipeDetails(res));
    setIsLoading(true)
  }, []);



  let item = recipeDetails

  //console.log(recipes);
  //const n = Math.floor(Math.random() * recipes.length);
  //let item = recipes.at(n);
  //console.log(item);
  // console.log(item.title)

  return (
    <div className="recipe">
      {/* {item = recipes.filter(i => i.)} */}

      {isLoading ? (
        <>

          {/* <div className="rescon-homex"> */}

          <div className="title">
              <div className="homeicon" ><Icon icon="spoon" size="3x" />  </div>
              <div><h1>{item.title}</h1>  </div>
            </div>

            <Container>



              <FlexboxGrid justify="space-around" style={{ height: '80vh', padding: 100 }}>
                <FlexboxGrid.Item componentClass={Col} className='left' colspan={24} md={9}>
                  {/* <h1>{item.title}</h1> */}
                  <img src={item.picture} />

                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                  componentClass={Col}
                  colspan={24}
                  md={15}
                  smHidden
                >
                  <h6>{item.description}</h6>
                  <Divider></Divider>
                  <h6>{item.method}</h6>
                  <Divider></Divider>
                  <h6>{item.cooktime} min</h6>
                  <Divider></Divider>
                  <h6>Level: {item.difficulty}</h6>

                </FlexboxGrid.Item>
              </FlexboxGrid>
            </Container>

          {/* </div> */}
        </>
      ) : (
        <Loader backdrop content="loading..." vertical />
      )}
    </div>
  );
}
