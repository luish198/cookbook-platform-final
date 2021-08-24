import React from "react";
import { Loader, Container, FlexboxGrid, Col, Divider, Icon } from "rsuite";
import './home.css';
import { useState, useEffect, Component, Footer, ButtonToolbar, IconButton } from "react";

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

    <div className="recipe-onexxx">
      {/* {item = recipes.filter(i => i.)} */}

      {isLoading ? (
        <>

          {/* <div className="rescon-homex"> */}

          <div className="title-recipe">
            <div className="homeicon" ><Icon icon="spoon" size="3x" />  </div>
            <div><h1>{item.title}</h1>  </div>
          </div>

          {/* <div> */}
          


          <Divider></Divider>
          <div className="subtitle-recipe" >
            <div>
              <h6>{item.cooktime} min</h6>
            </div>

            <div>
              <h6>
                {(item.difficulty === "hard" ? <Icon icon="bolt" size="2x" /> :
                  (item.difficulty === "easy" ? <Icon icon="child" size="2x" /> : <Icon icon="balance-scale" size="2x" />))}
                --Level: {item.difficulty}
              </h6>
            </div>

            <div>
              <h6>{item.nationality} min</h6>
            </div>


            
            {/* <h6>Level: {item.difficulty}</h6> */}



            {/* </div> */}


          </div>
          <Divider></Divider>



          <Container className="rescon-recipe">



            <FlexboxGrid justify="space-around" style={{ height: '100vh', padding: '100px' }}>
              {/* <FlexboxGrid.Item componentClass={Col} className='left' colspan={24} md={9}> */}

              <FlexboxGrid.Item componentClass={Col} className='left' colspan={24} md={9}>
                {/* <h1>{item.title}</h1> */}
                <img src={item.picture} className="img-recipe" />

              </FlexboxGrid.Item>




              <FlexboxGrid.Item
                componentClass={Col}
                colspan={24}
                md={15}
                smHidden
              >

                <div className="title-recipe-h3">
                  <div className="homeicon" ><Icon icon="order-form" size="3x" /></div>
                  <div><h3>Description</h3></div>
                </div>

                <pre><textarea className="text-recipe"
                  value={item.description}
                  rows={7}
                //col={100}
                /></pre>
                {/* <h6>{item.description}</h6> */}
                <Divider></Divider>

                <div className="title-recipe-h3">
                  <div className="homeicon" ><Icon icon="gear2" size="3x" /></div>
                  <div><h3>Method</h3></div>
                </div>

                <pre><textarea className="text-recipe"
                  value={item.method}
                  rows={7}
                //cols={100}
                />
                </pre>
                {/* <h6>{item.method}</h6> */}
                <Divider></Divider>

                <div className="title-recipe-h3">
                  <div className="homeicon" ><Icon icon="shopping-basket" size="3x" /></div>
                  <div><h3>Ingredients</h3></div>
                </div>

                <pre><textarea className="text-recipe"
                  value={item.Ingredients}
                  rows={7}
                //cols={100}
                />
                </pre>





                <Divider></Divider>


              </FlexboxGrid.Item>


            </FlexboxGrid>

          </Container>


          {/* </div> */}
        </>
      ) : (

        <Loader center backdrop size="lg" content="loading..." vertical />

      )}
    </div>
  );
}
