import React from 'react'
import styled from "@emotion/styled"

const CardWrapper = styled.div`
background-color: rgba(255,255,255,0.04);
width: 30%;
padding: 20px;
border-radius:4px;
`

function PlaylistCard(props) {

  return (
    <CardWrapper>
        <div className="image">
            <img style={{width:"100%",borderRadius:"4px"}} src={props.data.images[0].url} alt="" />
        </div>
        <div className="info">
            <h3 style={{color:'white'}}>{props.data.name}</h3>
            <p style={{color:"#B3B3B3"}}>{props.data.description}</p>
        </div>
    </CardWrapper>
  )
}

export default PlaylistCard