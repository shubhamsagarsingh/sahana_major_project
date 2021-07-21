import Bangalore from '../data/bangalore.json'
import Hyderabad from '../data/hyderabad.json'
import Mumbai from '../data/mumbai.json'
import Pune from '../data/pune.json'



export function Populate1(){
    var string = ''
    var array = []
    var mapImg = ''
    var city = document.getElementById('city').value



    if(city === "bangalore"){
        array = Object.values(Bangalore.Neighbourhood)
        mapImg = `<img src='./images/map_blr.jpg' alt=''/>`
    }

    else if(city === "hyderabad"){
        array = Object.values(Hyderabad.Neighbourhood)
        mapImg = `<img src='./images/map_hyd.jpg' alt=''/>`
    }

    else if(city === "mumbai"){
        array = Object.values(Mumbai.Neighbourhood)
        mapImg = `<img src='./images/map_mum.jpg' alt=''/>`
    }

    else if(city === "pune"){
        array = Object.values(Pune.Neighbourhood)
        mapImg = `<img src='./images/map_pune.jpg' alt=''/>`
    }


    for(var i=0; i<array.length; i++){
        string = string+`<option value='${array[i]}'>${array[i]}</option>`
    }

    string = `<select>${string}</select>`
    document.getElementById('place').innerHTML = string
    document.getElementById('map').innerHTML = mapImg
}



export function Populate2(){
    var ind
    var j = 0
    var city1 = document.getElementById('city').value
    var place = document.getElementById('place').value
    var table = document.getElementById('table_data')
    var array1 = Object.values(Bangalore.Neighbourhood)
    var array2 = Object.values(Hyderabad.Neighbourhood)
    var array3 = Object.values(Mumbai.Neighbourhood)
    var array4 = Object.values(Pune.Neighbourhood)

    //Bangalore
    var a = Object.values(Bangalore.Neighbourhood)
    var a1 = Object.values(Bangalore['1st Most Common Venue'])
    var a2 = Object.values(Bangalore['2nd Most Common Venue'])
    var a3 = Object.values(Bangalore['3rd Most Common Venue'])
    var a4 = Object.values(Bangalore['4th Most Common Venue'])
    var a5 = Object.values(Bangalore['5th Most Common Venue'])
    var a6 = Object.values(Bangalore['6th Most Common Venue'])
    var a7 = Object.values(Bangalore['7th Most Common Venue'])
    var a8 = Object.values(Bangalore['8th Most Common Venue'])
    var a9 = Object.values(Bangalore['9th Most Common Venue'])
    var a10 = Object.values(Bangalore['10th Most Common Venue'])

    //Hyderabad
    var b = Object.values(Hyderabad.Neighbourhood)
    var b1 = Object.values(Hyderabad['1st Most Common Venue'])
    var b2 = Object.values(Hyderabad['2nd Most Common Venue'])
    var b3 = Object.values(Hyderabad['3rd Most Common Venue'])
    var b4 = Object.values(Hyderabad['4th Most Common Venue'])
    var b5 = Object.values(Hyderabad['5th Most Common Venue'])
    var b6 = Object.values(Hyderabad['6th Most Common Venue'])
    var b7 = Object.values(Hyderabad['7th Most Common Venue'])
    var b8 = Object.values(Hyderabad['8th Most Common Venue'])
    var b9 = Object.values(Hyderabad['9th Most Common Venue'])
    var b10 = Object.values(Hyderabad['10th Most Common Venue'])

    //Mumbai
    var c = Object.values(Mumbai.Neighbourhood)
    var c1 = Object.values(Mumbai['1st Most Common Venue'])
    var c2 = Object.values(Mumbai['2nd Most Common Venue'])
    var c3 = Object.values(Mumbai['3rd Most Common Venue'])
    var c4 = Object.values(Mumbai['4th Most Common Venue'])
    var c5 = Object.values(Mumbai['5th Most Common Venue'])
    var c6 = Object.values(Mumbai['6th Most Common Venue'])
    var c7 = Object.values(Mumbai['7th Most Common Venue'])
    var c8 = Object.values(Mumbai['8th Most Common Venue'])
    var c9 = Object.values(Mumbai['9th Most Common Venue'])
    var c10 = Object.values(Mumbai['10th Most Common Venue'])

    //Pune
    var d = Object.values(Pune.Neighbourhood)
    var d1 = Object.values(Pune['1st Most Common Venue'])
    var d2 = Object.values(Pune['2nd Most Common Venue'])
    var d3 = Object.values(Pune['3rd Most Common Venue'])
    var d4 = Object.values(Pune['4th Most Common Venue'])
    var d5 = Object.values(Pune['5th Most Common Venue'])
    var d6 = Object.values(Pune['6th Most Common Venue'])
    var d7 = Object.values(Pune['7th Most Common Venue'])
    var d8 = Object.values(Pune['8th Most Common Venue'])
    var d9 = Object.values(Pune['9th Most Common Venue'])
    var d10 = Object.values(Pune['10th Most Common Venue'])
    

    if(city1 === "bangalore"){
        for(j=0; j<array1.length; j++){
            if(place === array1[j] )
            ind = j
        }

        table.innerHTML = `
                            <tr>
                                <td>${a[ind]}</td>
                                <td>${a1[ind]}</td>
                                <td>${a2[ind]}</td>
                                <td>${a3[ind]}</td>
                                <td>${a4[ind]}</td>
                                <td>${a5[ind]}</td>
                                <td>${a6[ind]}</td>
                                <td>${a7[ind]}</td>
                                <td>${a8[ind]}</td>
                                <td>${a9[ind]}</td>
                                <td>${a10[ind]}</td>
                            </tr>
        `
    }
    
    else if(city1 === "hyderabad"){
        for(j=0; j<array2.length; j++){
            if(place === array2[j] )
            ind = j
        }

        table.innerHTML = `
                            <tr>
                                <td>${b[ind]}</td>
                                <td>${b1[ind]}</td>
                                <td>${b2[ind]}</td>
                                <td>${b3[ind]}</td>
                                <td>${b4[ind]}</td>
                                <td>${b5[ind]}</td>
                                <td>${b6[ind]}</td>
                                <td>${b7[ind]}</td>
                                <td>${b8[ind]}</td>
                                <td>${b9[ind]}</td>
                                <td>${b10[ind]}</td>
                            </tr>
        `
    }

    else if(city1 === "mumbai"){
        for(j=0; j<array3.length; j++){
            if(place === array3[j] )
            ind = j
        }

        table.innerHTML = `
                            <tr>
                                <td>${c[ind]}</td>
                                <td>${c1[ind]}</td>
                                <td>${c2[ind]}</td>
                                <td>${c3[ind]}</td>
                                <td>${c4[ind]}</td>
                                <td>${c5[ind]}</td>
                                <td>${c6[ind]}</td>
                                <td>${c7[ind]}</td>
                                <td>${c8[ind]}</td>
                                <td>${c9[ind]}</td>
                                <td>${c10[ind]}</td>
                            </tr>
        `
    }

    else if(city1 === "pune"){
        for(j=0; j<array4.length; j++){
            if(place === array4[j] )
            ind = j
        }

        table.innerHTML = `
                            <tr>
                                <td>${d[ind]}</td>
                                <td>${d1[ind]}</td>
                                <td>${d2[ind]}</td>
                                <td>${d3[ind]}</td>
                                <td>${d4[ind]}</td>
                                <td>${d5[ind]}</td>
                                <td>${d6[ind]}</td>
                                <td>${d7[ind]}</td>
                                <td>${d8[ind]}</td>
                                <td>${d9[ind]}</td>
                                <td>${d10[ind]}</td>
                            </tr>
        `
    }    
}