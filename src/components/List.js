import React from 'react';
//import clsx from 'clsx';
import { Panel, PanelGroup, Nav, Icon, Row, Container, Content } from 'rsuite';
import { Divider } from 'rsuite';

import { FlexboxGrid, Col } from 'rsuite';
import './list.css';



export default function List({ recipes }) {

    console.log("result in list")
    console.log(recipes)

    const showRecipies = () => {

        recipes.map((recipes) => {
            console.log(recipes.title)
        })

    }

    showRecipies()

    const isOdd = (num) => {
        const resultluis = num % 2;
        return resultluis;
    }




    return (



        recipes ? (
            <>



                {
                    recipes.map((result, i) => (

                        <>


                            <div className="rescon2">

                                <div>


                                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>

                                        <img src={result.picture} alt="Recipe img missing" height="240" />
                                        <Panel header={result.title} >{/* <p><small>{result.description}</small></p>*/}</Panel>
                                    </Panel>


                                </div>

                                <div>

                                    <div className="rescon5">

                                        <pre><textarea className="text1"
                                            value={result.description}
                                        rows={3}
                                        cols={80}
                                        /></pre>

                                    </div>


                                    {/* <h6>{result.description}</h6> */}
                                    <Divider></Divider>
                                    <h6>{result.cooktime} min</h6>
                                    {/* <h6>{result.method}</h6> */}
                                    <Divider></Divider>
                                    <h6>{result.nationality} </h6>
                                    <Divider></Divider>
                                    <h6>
                                    {(result.difficulty === "hard"? <Icon icon="bolt" />: 
                                    (result.difficulty === "easy"? <Icon icon="child" /> : <Icon icon="balance-scale" />) )}
                                    --Level: {result.difficulty}
                                    </h6>


                                </div>




                            </div>





                            {/* <container className="rescon2"></container>     */}









                        </>

                    )
                    )
                }

            </>
        ) : (
            <h1>Loading...</h1>
        )


    )

}

//<container className="rescon"></container>

// First working list with pic and info for each recipe


/*{result.map((result) => (
                <div>
                    <img src={result.picture} alt="Recipe img missing" />
                    <ul>
                    <li>{result.title}</li>
                    <li>{result.description}</li>
                    <li>{result.picture}</li>
                    <li>{result.vegetarian? "Veg" : "Meet"}</li>

                </ul>
                </div>
            ))}*/


//<FavoriteIcon />

/*<FlexboxGrid.Item componentClass={Col} colspan={6} md={6}>

                                        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                            <img src={result.picture} alt="Recipe img missing" height="240" />
                                            <Panel header={result.title} >
                                                <p>
                                                    <small>{result.description}</small>
                                                </p>
                                            </Panel>
                                        </Panel>


                                    </FlexboxGrid.Item>*/


/*<container className="rescon">
                                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                    <img src={result.picture} alt="Recipe img missing" height="240" />
                                    <Panel header={result.title} >
                                        <p>
                                            <small>{result.description}</small>
                                        </p>
                                    </Panel>
                                </Panel>
                            </container>*/





/* <Panel header={<h3></h3>} shaded bordered bodyFill style={{ display: 'inline-block', width: '80vh' }}>

                                        <div>

                                            <FlexboxGrid.Item
                                                componentClass={Col}
                                                colspan={24}
                                                md={22}
                                                smHidden
                                            >

                                                <div className="rescon5">

                                                <textarea
                                                    value={result.description}
                                                    rows={3}
                                                    cols={80}
                                                />

                                                </div>






                                                <Divider></Divider>
                                                <h6>{result.cooktime} min</h6>

                                                <Divider></Divider>
                                                <h6>{result.nationality} </h6>
                                                <Divider></Divider>
                                                <h6>Level: {result.difficulty}</h6>

                                            </FlexboxGrid.Item>



                                        </div>


                                    </Panel>*/






/*<div className="rescon5">

                                        <pre><textarea
                                            value={result.description}
                                            //rows={3}
                                            //cols={80}
                                        /></pre>

                                    </div>*/