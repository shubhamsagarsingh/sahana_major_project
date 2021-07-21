import React from 'react'
import styled from 'styled-components'
import { Populate1, Populate2 } from './logic'



const Home = () => {
    return(
        <HomeDiv>
            <div className='container'>
                <div className='container_level1'>
                    <div className='container_level1_level2'>
                        <div className='container_level1_level2_top'>
                            <label for="city">City</label><br/><br/>
                            <select id="city" onChange={Populate1}>
                                <option value='' disabled selected>SELECT CITY</option>
                                <option value='bangalore'>Bangalore</option>
                                <option value='hyderabad'>Hyderabad</option>
                                <option value='mumbai'>Mumbai</option>
                                <option value='pune'>Pune</option>
                            </select><br/><br/>

                                            
                            <label for='place'>Area</label><br/>
                            <select id="place" onChange={Populate2}>
                                <option value='' disabled selected>SELECT PLACE</option>
                            </select>
                        </div>

                        <div className='container_level1_level2_mid'>
                            <table className='container_level1_level2_mid_table_heading'>
                                <tr>
                                    <th>Neighbourhood</th>
                                    <th>1st Most Common Venue</th>
                                    <th>2nd Most Common Venue</th>
                                    <th>3rd Most Common Venue</th>
                                    <th>4th Most Common Venue</th>
                                    <th>5th Most Common Venue</th>
                                    <th>6th Most Common Venue</th>
                                    <th>7th Most Common Venue</th>
                                    <th>8th Most Common Venue</th>
                                    <th>9th Most Common Venue</th>
                                    <th>10th Most Common Venue</th>
                                </tr>
                            </table>

                            <table className='container_level1_level2_mid_table_data' id='table_data'>
                                <tr>
                                    
                                </tr>
                            </table>
                        </div>

                        <div className='container_level1_level2_bottom' id='map'>
                            <img/>
                        </div>
                    </div>
                </div>
                
            </div>
        </HomeDiv>
    )
}



export default Home



const HomeDiv = styled.div`
    height: 100%;
    background: rgba(0,0,0,0.8);
    color: rgba(256,256,256);
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        // border: 1px solid red;
        background: rgba(100,100,100);
        border-radius: 10px;
        width: 300px;
        height: 1800px;
        box-shadow: 2px 10px 12px rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;

        &_level1{
            // border: 1px solid red;
            width: 290px;
            height: 1750px;
            display: flex;
            justify-content: center;
            margin: 40px 0px 40px 0px;

            &_level2{
                // border: 1px solid red;
                width: 280px;
                height: 1700px;
                display: flex;
                align-items: center;
                flex-direction: column;

                &_top{
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 250px;
                    height: 200px;
                    
                    label{
                        //
                    }

                    select{
                        height: 30px;
                        margin: 10px 10px 30px 0px;
                    }
                }
        
                &_mid{
                    border: 1px solid rgba(255,0,0,0.4);
                    border-radius: 10px;
                    background-color: rgba(0,0,0,0.4);
                    display: flex;
                    justify-content: space-between;
                    width: 280px;
                    height: 1050px;
                    margin-top: 60px;

            
                    &_table_heading{
                        // border: 1px solid red;
                        width: 100px;                       

                        tr{
                            // border: 1px solid red;
                            display: flex;
                            flex-direction: column;
                            margin: 40px 15px 20px 10px;                           

                            th{
                                border: 1px solid rgba(255,0,0,0.6);
                                border-left: none;
                                word-wrap : break-word;
                                width: 100px;
                                height: 60px;
                                margin-bottom: 30px;
                            }
                        }
                    }

                    &_table_data{
                        // border: 1px solid red;
                        width: 120px;

                        tr{
                            // border: 1px solid red;
                            display: flex;
                            flex-direction: column;
                            margin: 40px 10px 20px 15px; 

                            td{
                                border: 1px solid blue;
                                border-right: none;
                                word-wrap : break-word;
                                width: 120px;
                                height: 60px;                                
                                margin-bottom: 30px;
                            }
                         }
                    }
                }

                &_bottom{
                    // border: 1px solid red;
                    margin-top: 60px;

                    img{
                        object-fit: scale-down;
                        width: 280px;
                        height: 280px;
                    }
                }
            }
        }                
    }
`;