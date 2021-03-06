import { Chip } from '@material-ui/core'
import React from 'react'

export default function ChipsView() {
  return (
    <div>
      {
        ['Pro', 'Cuisines', 'Dessert', 'Khatta', 'Meetha'].map((item, index) => {
          return <Chip key={index} variant="outlined" 
          label={item}
          style={{
            margin: '16px 2px'
          }}
           />
        })
      }
    </div>
  )
}