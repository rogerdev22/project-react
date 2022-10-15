// ATUALIZADO ATE A AULA 10 Estilizando a aplicacao 


import styled from "styled-components";

import Backgroud from './assets/fundoimage1.svg'

export const Container = styled.div`
        background: url("${Backgroud}");
        background-size:cover;
        display: flex;
        flex-direction: column;
        align-items: center;
         gap: 40px;
         height: 100 vh;
   `;
export const Image = styled.img`
        margin-top:30px;
`;
export const ContainerItens = styled.div`
        background: linear-gradient(157.44deg,
         rgba(255, 255, 255, 0.6) 0.84%,
         rgba(255, 255, 255, 0.6) 0.85%, 
         rgba(255, 255,255, 0.15) 100%
        );
        border-radius: 61px 61px 0px 0px;
        padding: 50px 36px;
        display:flex;
        flex-direction: column;
        height:100 vh;
`;
export const H1 = styled.h1`
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 80px;
`;
export const Inputlabel = styled.p`
        letter-spacing: -0.408px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
         color: #EEEEEE;
         margin-left:25px;
       
`;
export const Input = styled.input`
        background-color:greenyellow;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        width: 342px;
        height: 78px;
        border:none;
        outline:none;
        padding-left: 25px;
        margin-bottom: 34px;
        font-style: normal;
        font-size:  20px;
        line-height: 28px;
        color:#ffffff;
       
        
`;
export const Button = styled.button`

        width:370px;
        height:70px;
        background:rgba(0,0,0,0.8);
        border-radius: 14px;
        border: none;
        font-style: normal;
        font-size: 17px;
        line-height: 28px;
        color:#ffffff;
        cursor:pointer;
         display:flex;
         align-items: center;
        justify-content: center;
        gap:20px;
&:hover {
          opacity:0.8;    
}
&:active{
        opacity:0.5;
} 
`;
export const User=styled.li `

       display:flex;
       justify-content:space-around;
       align-items: center;
       margin-top: 20px;
       background: rgba(255,255,255,0.25);
       box-shadow:0px 4px 4px rgba(255,255,255,0.25);
       border-radius: 14px;
       width: 342px;
       height: 58px;
       border:none;
       outline:none;
       //padding: 18px;
   
  p {
     font-style: normal;
     font-weight: normal;
     font-size: 25px;
     line-height: 28px;
     color:#ffffff;

}   
 button {
        background: none;
        border:none;
        cursor:pointer;
 }
`;
