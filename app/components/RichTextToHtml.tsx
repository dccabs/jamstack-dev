import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import React from 'react'

type RichTextToHtmlProps = {
  richText: any
}

const RichTextToHtml = (props: RichTextToHtmlProps) => {
  const { richText } = props || {}
  const renderOptions = {
    renderText: (text: string) => {
      return text
        .split('\n')
        .reduce((children: any, textSegment: any, index: React.Key) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
  }

  const html = richText?.map((item: Document, index: any) => {
    return (
      <React.Fragment key={`body-${index}`}>
        {documentToReactComponents(item, renderOptions)}
      </React.Fragment>
    )
  })

  return (
    <div className="rich-text__body [&_a]:text-blue-400 [&_a]:underline">
      {html}
    </div>
  )
}

export default RichTextToHtml
