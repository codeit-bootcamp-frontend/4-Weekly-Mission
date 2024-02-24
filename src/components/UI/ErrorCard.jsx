import React from "react"
import Wrapper from "components/layout/Wrapper"
import Card from "./Card"

import "./ErrorCard.css"

function ErrorCard({ children }) {
  return (
    <Wrapper>
      <Card className="errorCard">
        <div className="errorCard-emoji">❗️</div>
        <p className="errorCard-message">{children}</p>
      </Card>
    </Wrapper>
  )
}

export default ErrorCard
