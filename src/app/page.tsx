'use client'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

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
  return <Survey model={survey} />
}
