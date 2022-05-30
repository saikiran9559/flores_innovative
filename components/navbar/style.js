import styled from 'styled-components'

export const Container = styled.div`
    z-index: 10;
    position:fixed;
    padding: 20px 10%;
    color:black;
    width: 100%;
    // background-color: #333;
    // background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // box-shadow: rgb(220 220 220) 0px 2px 10px;
    align-items: center;
    top: 0px;
    left: 0px;
`
export const LogoTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
export const Logo = styled.div`
    background-color: #cccccc;
    cursor: pointer;
    color: black;
`
export const Title = styled.div`
    cursor: pointer;
    &:hover ~ ${Logo}{ color: blue;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
export const Button = styled.div`
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items:left;
    overflow: hidden;
    &:hover{
        #layer{
            left: 0%;
        }
        color: grey;
    }
`
export const Layer = styled.div`
    position: absolute;
    background-color:#FFD24C;
    width: 100%;
    left: -100%;
    bottom: 0px;
    height: 10%;
    transition: all 0.2s ease-in;
    z-index: -1;
`
// export const Name = styled.div`
//     width: 100%;
//     height: 100%;
//     text-align: center;
// `


