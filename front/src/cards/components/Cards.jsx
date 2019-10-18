import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 52rem;
`
const Card = styled.div`
display:flex;
flex-direction: column;
margin: 1rem;
padding: 0.5rem;
border: 0.05rem solid #dfdfdf;
border-radius: 5%;
& > h3::first-letter{
    text-transform: uppercase;
}
`

const Img = styled.img`
padding-top: 1rem;
min-width:219px;
max-width:219px;
max-height: 50%;
`
const Title = styled.h3``

const Description = styled.p``

const Link = styled.button`
background-color: #87CEEB;
padding: 0.5rem; 
border-radius: 0.25rem;
border-color: transparent;
text-transform: uppercase;
font-weight:bold;
outline: none;
color: #fff;
&:hover{
background-color: ${lighten(0.2, '#87CEEB')};
}
&:focus{
background-color: ${lighten(0.2, '#87CEEB')};
}
`
const Button = styled.button`
background-color: #87CEEB;
border-radius: 1rem;
border-color: transparent;
text-transform: uppercase;
font-weight:bold;
outline: none;
color: #fff;
&:hover{
background-color: ${lighten(0.2, '#87CEEB')};
}
`

const Aside = styled.aside`
display: flex;
justify-content: flex-end;
`

const Cards = (props) => {
    return (
        <Container>
            {console.log(props.data)}
            {props.data.map(e =>
                <Card >
                    <Aside><Button onClick={e => console.log(e)}>X</Button></Aside>
                    <Img src={e.img} alt={e && e.title != null ? e.title : 'Aucune information'} />
                    <Title >{e && e.title != null ? e.title : 'Aucune information'}</Title>
                    <Description >{e && e.description != null ? e.description : 'Aucune information'}</Description>
                    <Link>{e && e.link != null ? e.link : 'Aucune information'}</Link>
                </Card>
            )}
        </Container>)
}

export default Cards