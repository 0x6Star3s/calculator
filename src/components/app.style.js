import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Montserrat', sans-serif;
    }

`

export const Main = styled.div`
        min-height: 100vh;
        display: flex;
        justify-content: center;
        background: rgb(5,0,98);
        background: linear-gradient(90deg, rgba(5,0,98,1) 0%, rgba(14,14,163,1) 36%, rgba(15,84,200,1) 64%, rgba(0,95,255,1) 100%);
`

export const StyleApp = styled.div `
    /* background-image:linear-gradient(to right bottom, #e4a7db, #d245db, #a22dce, #7d3ac5, #4d56bd); */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainInfo = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
color: white;
bottom: 0;
width: 100%;

p{
    font-size: 24px;
}
`

export const StyleButton = styled.a`
text-align: center;
text-decoration: none;
 width: 100px;
 padding: 6px 0;
 font-size: 16px;
 background: transparent;
 border: none;
 position: relative;
 color: #f0f0f0;
 z-index: 1;

&::after,
&::before {
 content: '';
 position: absolute;
 bottom: 0;
 right: 0;
 z-index: -99999;
 transition: all .4s;
}

&::before {
 transform: translate(0%, 0%);
 width: 100%;
 height: 100%;
 background: #28282d;
 border-radius: 10px;
}

&::after {
 transform: translate(10px, 10px);
 width: 35px;
 height: 35px;
 background: #ffffff15;
 backdrop-filter: blur(5px);
 border-radius: 50px;
}

&:hover::before {
 transform: translate(5%, 20%);
 width: 110%;
 height: 110%;
}

&:hover::after {
 border-radius: 10px;
 transform: translate(0, 0);
 width: 100%;
 height: 100%;
}

&:active::after {
 transition: 0s;
 transform: translate(0, 5%);
}
`