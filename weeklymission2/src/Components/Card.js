import React from "react";

const defaultImage = `https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg`
export function Card({ cardInfo, key }) {
  const { imageSource, createdAt, description, url } = cardInfo

  //createdAtDate
  const date = new Date(createdAt).toLocaleString()
  const createdAtDate = date.split('').slice(0,date.indexOf('오')-2).join('')

  //createdFromTime
  const getFromTime = (time) => {
    const today = new Date()
    const update = new Date(time)

    const minutes = (today.getTime() - update.getTime())/1000/60
    const hours = minutes/60
    const days = hours/24
    const months = days/30

    if(months>=12) return `${Math.floor(months/12)} year ago`
    if(months<=11) return `${Math.floor(months)} months ago`
    if(days>=31) return `1 month ago`
    if(days<=30) return `${Math.floor(days)} days ago`
    if(hours>=24) return `1 day ago`
    if(hours<=23) return `${Math.floor(hours)} hours ago`
    if(minutes>=60) return `1 hour ago`
    if(minutes<=59) return `${Math.floor(minutes)} minutes ago`
    if(minutes<2) return `1 minutes ago`
  }

  return (
    <>
      <a href={url}>
        <div className="card">
          <div className="cardImgSource">
            {imageSource ? <img src={imageSource} alt="카드이미지" className="cardImg"></img> : 
            <img src={defaultImage} alt="기본이미지" className="cardImg"></img>}
          </div>
          <div className="cardContent">
            <p className="createdFrom">{getFromTime(createdAt)}</p>
            <p className="description">{description}</p>
            <p className="createdAt">{createdAtDate}</p>
          </div>
        </div>
      </a>
    </>
  )
}