import React from "react";
import { Loader, Container, FlexboxGrid, Col, Divider } from "rsuite";
import "./Home.css";

export default function Recipe({recipes}) {
    
  console.log(recipes);
  const n = Math.floor(Math.random() * recipes.length);
  let item = recipes.at(n);
  console.log(item);
  // console.log(item.title)

  return (
    <div className="recipe">
      {/* {item = recipes.filter(i => i.)} */}

      {item ? (
        <>
          
          <Container>
            

            
            <FlexboxGrid justify="space-around" style={{height : '80vh', padding: 100}}>
              <FlexboxGrid.Item componentClass={Col} className='left' colspan={24} md={9}>
              <h1>{item.title}</h1>
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
        </>
      ) : (
        <Loader backdrop content="loading..." vertical />
      )}
    </div>
  );
}
