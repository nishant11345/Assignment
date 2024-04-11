
"use client"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import "../../src/app/sumit/page.css"
export default function Home() {

  const [activeTab, setActiveTab] = useState(null);
      
        const handleTabClick = (tabIndex) => {
          setActiveTab(tabIndex);
        };

  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleYesClick = () => {
    setYesClicked(true);
    setNoClicked(false);
  };

  const handleNoClick = () => {
    setNoClicked(true);
    setYesClicked(false);
  };
  return (
   <>
  <div className="main">
<div className="review">
<div className="cross-button">
            <IconButton style={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </div>
  <p className='main-heading'>Leave a review</p>
  <div className="safety">
    <p className='heading'>Safety</p>
    <p className='sub-heading'>Rate us on basis of safety</p>
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ fontSize: 40 }} className='Rating' />
     
    </Stack>
  </div>
  <div className="Communication">
    <p className='heading'>Communication</p>
    <p className='sub-heading'>Rate us on basis of Communication</p>
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ fontSize: 40 }} className='Rating' />
     
    </Stack>
  </div>
<div className='recomend'>

  <p className='heading'>Would you recommend Trausti?</p>
  <p className='sub-heading'> Select Yes or No based on your experience</p>
  <div className='thumb'>
      <IconButton onClick={handleYesClick} style={{ color: yesClicked ? 'red' : 'grey' }}>
      <ThumbDownIcon sx={{ fontSize: 30 }} /> 
     
      </IconButton>
      <p>No</p>
      <IconButton onClick={handleNoClick} style={{ color: noClicked ? 'green' : 'grey' }}>
       <ThumbUpIcon sx={{ fontSize: 30 }} />
      
      </IconButton>
      <p>Yes</p>
    </div>
</div>
<div>
    <p className='heading'>Praise</p>
    <p className='sub-heading'>What is your Experince of using product</p>
    <div className="tab-container">
      <div
        className={`tab ${activeTab === 0 ? 'active' : ''}`}
        onClick={() => handleTabClick(0)}
      >
       Adventurous
      </div>
      <div
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
        onClick={() => handleTabClick(1)} 
      >
        Average
      </div>
      <div
        className={`tab ${activeTab === 2 ? 'active' : ''}`}
        onClick={() => handleTabClick(2)}
      >
         Good 
      </div>
    </div>
</div>
</div>
  </div>

   </>
  );
}
