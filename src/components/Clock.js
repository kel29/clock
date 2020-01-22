import React, { useState } from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

const Clock = () => {
  const [showDate, setShowDate] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const handleToggleDate = () => {
    setShowDate(!showDate)
  }

  const getDate = () => {
    return new Date().toDateString()
  }

  const getTime = () => {
    setTime(new Date().toLocaleTimeString())
  }

  setInterval(getTime, 1000)

  return (
    <Grid centered>
      <div className='clock-card'>
        <Card>
          <Button onClick={handleToggleDate}>
            {showDate ? <Icon name='calendar check' /> : <Icon name='calendar minus' />}  
          </Button>
          <h1>
            {time}
          </h1>
          <Card.Meta>
            { showDate ? <span>{getDate()}</span> : null }
          </Card.Meta>
        </Card>
      </div>
    </Grid>
  )
}

export default Clock
