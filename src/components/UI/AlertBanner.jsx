import React from "react"
import DangerIcon from "assets/images/icon/danger.svg"
import InfoIcon from "assets/images/icon/info.svg"
import * as S from "./AlertBanner.style"

function AlertBanner({ children, type }) {
  const alertType = {
    danger: {
      icon: DangerIcon,
      background: "#faeced",
      color: "#ff1115",
    },
    info: {
      icon: InfoIcon,
      background: "#f0f6ff",
      color: "#088cff",
    },
  }

  const defaultType = alertType[type] || alertType["danger"]
  const background = defaultType.background
  const color = defaultType.color
  const icon = defaultType.icon

  return (
    <S.AlertCard $background={background}>
      <S.Icon src={icon} />
      <S.Message $color={color}>{children}</S.Message>
    </S.AlertCard>
  )
}

export default AlertBanner
