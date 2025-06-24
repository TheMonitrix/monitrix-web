import { ChevronDown, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const Card = ({ title, body }: CardProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div
        style={{
          padding: '1rem',
          marginBottom: '1rem',
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        className="card"
        onClick={() => setIsActive((state) => !state)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div>{!isActive ? <ChevronRight /> : <ChevronDown />}</div>

          <div
            style={{
              marginLeft: '0.5rem',
            }}
          >
            {title}
          </div>
        </div>
        {isActive && <div className="card__body">{body}</div>}
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  body: string
}

export default Card
