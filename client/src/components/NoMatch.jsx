import React from 'react';
import img1 from '../memes/1.jpg'
import img2 from '../memes/2.jpg'
import img3 from '../memes/3.jpeg'
import img4 from '../memes/4.jpg'
import img5 from '../memes/5.jpg'
import img6 from '../memes/6.jpg'
import img7 from '../memes/7.jpg'
import img8 from '../memes/8.jpg'

export default function Home() {
const arr = [img1,img2,img3,img4,img5,img6,img7,img8]
  return (
    <div>
      <h1> Ups... ¡Parece que ingresaste una URL incorrecta!</h1>
      <img src={arr[Math.floor((Math.random()*10)%8)]} width="550px" height="auto" alt="" />
    </div>
  )
}
