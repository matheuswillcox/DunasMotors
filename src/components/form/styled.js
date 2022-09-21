import styled from "styled-components";


export const Container = styled.div`

width: 300px;
height: 550px;
background-color: #606060;
padding: 20px;
border-radius: 10px;

form{
    margin: 0;
}

.boxForm{


}

.solicitar{
    color: white;
}

.formulario{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;
    margin: 0;
}

.sugestao{
    height: 185px;
}

.button{
    width: 100px;
    height: 50px;
    border: none;
    background-color: white;
    border-radius: 10px;

}
.span{
 
    font-size: 10px;
    color: white;
}

.divCheck{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.box{
    display: flex;
    align-items: center;
}

.checkBox{
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

`