'use client'
import { useEffect, useState } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css';

export default function Home(){
  const surveyJson = {
    pages: [
      {
        elements: [
          {
            type: 'radiogroup',
            name: 'some-radiogroup',
            choices: ['a', 'b', 'c'],
          },
        ],
      },
    ],
  }
    const survey = new Model(surveyJson)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])
   
    return isClient ? <Survey model={survey} /> : null
}