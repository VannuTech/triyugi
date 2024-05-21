import React, {useState} from 'react';
import './Gallery2.css';
import CloseIcon from './images/CloseIcon.jpg';



const Gallery1 = () => {

  let data = [
    
        {
        id: 1,
        imgSrc:"./images/IMG_9275.jpg"
        },
{
id: 1,
imgSrc:"./images/IMG_9289.jpg"
},
  {
  id: 1,
  imgSrc:"./images/IMG_9275.jpg"
  },
 
{
id: 1,
imgSrc:"./images/IMG_9290.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9298.jpg"
  },
  {
    id: 1,
    imgSrc:"./images/IMG_9280.jpg"
    },
{
id: 1,
imgSrc:"./images/couple1.jpg"
},
{
  id: 1,
  imgSrc:"./images/couple1a.jpg"
  },
{
id: 1,
imgSrc:"./images/coule1b.jpg"
},
{
  id: 1,
  imgSrc:"./images/couple1d.jpg"
  },
  {
    id: 1,
    imgSrc:"./images/couple2.jpg"
    },
  {
  id: 1,
  imgSrc:"./images/coule1b.jpg"
  },
{
  id: 1,
  imgSrc:"./images/IMG_9447.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9496.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9506.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9330.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9321.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9295.jpg"
},
{
  id: 1,
  imgSrc:"./images/rajanadeep1.jpg"
  },
{
  id: 1,
  imgSrc:"./images/IMG_9448.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9272.jpg"
},

            {
      id: 2,
      imgSrc:"./images/media1.jpg"
      },
            {
      id: 3,
      imgSrc:"./images/doli1.jpg" 
      },
            {
      id: 4,
      imgSrc:"./images/history1.jpg" 
      },
            {
        id: 5,
        imgSrc:"./images/history2.jpg"
      },
            {
      id: 6,
      imgSrc:"./images/food.jpg" 
    },
        {
      id: 7,
      imgSrc:"./images/DulhanRanju2.jpg"
    },
    {
      id: 7,
      imgSrc:"./images/dhol.jpg"  
    }, {
      id: 8,
      imgSrc:"./images/TriyugiNightView.jpg" 
    }, {
      id: 9,
      imgSrc:"./images/akhandhuni.jpg"
    }, {
      id: 10,
      imgSrc:"./images/couple3.jpg" 
    }, {
      id: 11,
      imgSrc:"./images/couple2.jpg" 
    }, {
      id: 12,
      imgSrc:"./images/dulhanRanju1.jpg"
    }, {
      id: 13,
      imgSrc:"./images/decor2.jpg"
    }, {
      id: 14,
      imgSrc:"./images/dulhanRanju1.jpg" 
    },  {
      id: 18,
      imgSrc:"./images/food.jpg" 
    }, {
      id: 19,
      imgSrc:"./images/food1.jpg" 
    }, {
      id: 20,
      imgSrc:"./images/gagar.jpg" 
    }, {
      id: 21,
      imgSrc:"./images/GMVN1.jpg" 
    }, {
      id: 22,
      imgSrc:"./images/gmvn2.jpg" 
    }, {
      id: 23,
      imgSrc:"./images/gmvn3.jpg" 
    }, {
      id: 24,
      imgSrc:"./images/gmvn4.jpg" 
    }, {
      id: 25,
      imgSrc:"./images/grouppic1.jpg" 
    }, {
      id: 26,
      imgSrc:"./images/haldi1.jpg" 
    }, {
      id: 27,
      imgSrc:"./images/haldi2.jpg" 
    }, {
      id: 28,
      imgSrc:"./images/image2.jpg" 
    }, {
      id: 29,
      imgSrc:"./images/jaimala1.jpg" 
    },
        {
      id: 30,
      imgSrc: './images/jaimala2.jpg'
    },
    {
      id: 8,
      imgSrc: './images/jaimala3.jpg'
    },
    {
      id: 8,
      imgSrc: './images/jaimala4.jpg'
    },
    {
      id: 8,
      imgSrc: './images/kund1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesbeauty.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesinnuthyellow.jpg'
    },
    {
      id: 1,
      imgSrc:"./images/couple4.jpg"
      },
      {
        id: 1,
        imgSrc:"./images/couple5.jpg"
        },
      {
      id: 1,
      imgSrc:"./images/coule6.jpg"
      },
    {
      id: 8,
      imgSrc: './images/ladiesyello.jpg'
    },
    {
      id: 8,
      imgSrc: './images/lights.jpg'
    },
    {
      id: 1,
      imgSrc:"./images/couple1e.jpg"
      },
      {
        id: 1,
        imgSrc:"./images/couple1f.jpg"
        },
      {
      id: 1,
      imgSrc:"./images/coule1j.jpg"
      },
      {
        id: 1,
        imgSrc:"./images/couple2.jpg"
        },
        {
          id: 1,
          imgSrc:"./images/couple3.jpg"
          },
        {
        id: 1,
        imgSrc:"./images/coule1b.jpg"
        },
        {
          id: 1,
          imgSrc:"./images/haldi2022a.jpg"
          },
          {
            id: 1,
            imgSrc:"./images/haldi2022b.jpg"
            },
            {
              id: 1,
              imgSrc:"./images/haldi2022c.jpg"
              },
              {
                id: 1,
                imgSrc:"./images/haldi2022d.jpg"
                },
      {
        id: 1,
        imgSrc:"./images/IMG_9447.jpg"
        },
      {
      id: 1,
      imgSrc:"./images/IMG_9496.jpg"
      },
      {
        id: 1,
        imgSrc:"./images/IMG_9506.jpg"
        },
      {
      id: 1,
      imgSrc:"./images/IMG_9330.jpg"
      },
    {
      id: 8,
      imgSrc: './images/mehndi2.jpg'
    },
    {
      id: 8,
      imgSrc: './images/mehndipic3.jpg'
    },
    {
      id: 8,
      imgSrc: './images/mountainBeauty.jpg'
    },
   
    {
      id: 8,
      imgSrc: './images/ranjanadeep1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ranjana pic yellowdress1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/sangeet1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/sangeet2.jpg'
    },
    {
      id: 8,
      imgSrc: './images/sindoor.jpg'
    },
    {
      id: 8,
      imgSrc: './images/snow1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/snow2.jpg'
    },
    {
      id: 8,
      imgSrc: './images/snow3.jpg'
    },
    {
      id: 8,
      imgSrc: './images/snow4.jpg'
    },
    {
      id: 8,
      imgSrc: './images/snow5.jpg'
    },
    {
      id: 8,
      imgSrc: './images/snow6.jpg'
    },
    {
      id: 8,
      imgSrc: './images/swagat1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triback.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triuygi12.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi14.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi full image1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi image.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi12.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi13.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi15.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi16.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi17.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi18.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi19.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugi20.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugiEveview.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugifullimage2.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugiImage3.jpg'
    },
    {
      id: 8,
      imgSrc: './images/TriyugiNightView.jpg'
    },
    {
      id: 8,
      imgSrc: './images/triyugisno.jpg'
    },
    {
      id: 8,
      imgSrc: './images/we in media.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesbeauty.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesinnuthyellow.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesyello.jpg'
    },
    {
      id: 8,
      imgSrc: './images/lights.jpg'
    },
    {
      id: 8,
      imgSrc: './images/couple1.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesbeauty.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesinnuthyellow.jpg'
    },
    {
      id: 8,
      imgSrc: './images/ladiesyello.jpg'
    },
    {
      id: 8,
      imgSrc: './images/lights.jpg'
    },
    {
      id: 8,
      imgSrc: './images/couple1.jpg'
    },
   
    {
      id: 8,
      imgSrc: './images/iMG_9289.jpg'
    },
    {
      id: 8,
      imgSrc: './images/iMG_9289 copy.jpg'
    },
    {
      id: 1,
      imgSrc:"./images/IMG_9290.jpg"
      },
  {
  id: 1,
  imgSrc:"./images/IMG_9276.jpg"
  },
  {
    id: 1,
    imgSrc:"./images/IMG_9281.jpg"
    },
{
id: 1,
imgSrc:"./images/IMG_9292.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9296.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9332.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9449.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9495.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9505.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9332.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9324.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9299.jpg"
},
{
  id: 1,
  imgSrc:"./images/IMG_9450.jpg"
  },
{
id: 1,
imgSrc:"./images/IMG_9277.jpg"
},

 
//  
//  
// 
// 
//  
// 
// 
// 
//
// Src=
// Src=
// Src=
// Src=
// Src=
// Src=
// Src= 
// Src="./images/decor3.jpg" 
// Src="./images/jaimala1.jpg" 
// Src="./images/jaimala2.jpg" 
// Src="./images/jaimala4.jpg" 
// Src="./images/sindoor.jpg" 
// Src="./images/swagat1.jpg" 
// Src="./images/sangeet1.jpg" 
// Src="./images/dulhan1.jpg" 
// Src="./images/grouppic1.jpg" 
// Src="./images/image2.jpg" 
// Src="./images/decor1.jpg" 
// Src="./images/decor2.jpg" 
// Src="./images/decor3.jpg" 
// Src="./images/haldi1.jpg" 
// Src="./images/haldi2.jpg" 
// Src="./images/haldi3.jpg" 
// Src="./images/mehndi2.jpg" 
// Src="./images/ladiesbeauty.jpg"
// Src="./images/jaimala4.jpg" 
// Src="./images/mountainBeauty.jpg"
// Src="./images/triyugi17.jpg" 
// Src="./images/ranjana pic yellw.jpg"
// Src="./images/triyugi12.jpg" 
// Src="./images/triyugi1.jpg"
// Src="./images/triback.jpg" 
// Src="./images/haldi5.jpg" 
// Src="./images/ranjanamain.jpg"
// Src="./images/triyugi16.jpg" 
// Src="./images/triyugiEveview.jpg"
// Src="./images/TriyugiImage4.jpg" 
// Src="./images/triyugiImage3.jpg" 
// Src="./images/food1.jpg"
// Src="./images/triyugi18.jpg" 
// Src="./images/snow1.jpg"
// Src="./images/snow2.jpg" 
// Src="./images/snow3.jpg"
// Src="./images/snow4.jpg"
// Src="./images/snow5.jpg" 
// Src="./images/gagar.jpg"
// Src="./images/ranjanayello2.jpg"
// Src="./images/dulhan2.jpg" 
// Src="./images/dulhan3.jpg" 
// Src="./images/dulhan4.jpg" 
// Src="./images/ranjanayello3.jpg"
// Src="./images/triyugi19.jpg" 
// Src="./images/triyugi20.jpg" 
      
    ];
    const [model, setModel] = useState(false)
    const [tempimgsrc, setTempImgSrc] =  useState('')
    const getImg = (imgSrc) =>{
       setTempImgSrc(imgSrc);
       setModel(true);
       
    }
    return ( <>
      <div className={model? "model open" : "model"}>
      <img src = {tempimgsrc} alt='There is pic..'/>
    <img src = {CloseIcon } className='svge' onClick={()=> setModel(false)}  alt='There is pic'/>
      </div>
      {
   <div className='Gallery1'>
       {data.map((item, index)=> {
           return (
             <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
               <img
                 src={item.imgSrc}
                 style={{ width: '100%' }}
                 className="img-fluid shadow-4"
                 alt="here is"
               />
             </div>
           );
       })}
   </div>
      }
    </>
      )
  }
  

export default Gallery1