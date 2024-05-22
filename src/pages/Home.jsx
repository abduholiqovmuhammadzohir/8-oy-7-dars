import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import styled from "@emotion/styled"
import PlaylistCard from '../components/PlaylistCard';
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../components/utils';
import { create } from '../redux/authSlice';


const HomeWrapper = styled.div`
width: 66%;
background-color: #121212;
`;

const Container = styled.div`
max-width: 990px;
width: 100%;
margin:0 auto;

display: flex;
justify-content: space-between;
align-items:center;
flex-wrap:wrap;
gap:20px;
`;

const CardWrapper = styled.div`

`



function Home() {

  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer${token}`
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('playlist', data);
          setFeatured(data.playlist.items)
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      getToken()
        .then((res) => {
          dispatch(create(res))
        })
        .catch((err) => {
          console.log(err);
        })
    };
  }, []);


  return (
    <HomeWrapper>
      <HomeHero>
        <Container></Container>
      </HomeHero>
      <CardWrapper>
        <Container>
          {
            featured.length > 0 &&  featured.map((el,index) => {
              return(
                <PlaylistCard key={index} data={el}></PlaylistCard>
              )
            })
          }
          <PlaylistCard></PlaylistCard>
        </Container>
      </CardWrapper>
    </HomeWrapper>
  )
}

export default Home