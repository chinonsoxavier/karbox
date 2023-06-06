import {css} from 'styled-components'

export const smobile = (props)=>{
   return css`
   @media only screen and (max-width:350px){
    ${props}
   }`
}
export const mmobile = (props)=>{
   return css`
   @media only screen and (max-width:438px){
    ${props}
   }`
}
export const mobile = (props)=>{
   return css`
   @media only screen and (max-width:380px){
    ${props}
   }`
}
export const lmobile = (props)=>{
   return css`
   @media only screen and (max-width:520px){
    ${props}
   }`
}
export const ltablet = (props)=>{
   return css`
   @media only screen and (max-width:890px){
    ${props}
   }`
}
export const metablet = (props)=>{
   return css`
   @media only screen and (max-width:830px){
    ${props}
   }`
}
export const tablet = (props)=>{
   return css`
   @media only screen and (max-width:780px){
    ${props}
   }`
}
export const Laptop = (props)=>{
   return css`
   @media only screen (min-width:520px) and (max-width:1300px){
    ${props}
   }`
}
export const CustomerBreakpoint = (props)=>{
   return css`
   @media only screen and (max-width:650px){
    ${props}
   }`
}