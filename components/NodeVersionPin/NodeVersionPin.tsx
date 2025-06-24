import MarkdownRenderer from '@/components/ReactMarkdown'
import React from 'react'

const markdownContent = `
<Admonition">
If you run into any error, you might want to use these pinned versions of OpenTelemetry libraries used in this <a href = "https://github.com/ezeslucky/monitrix.git/sample-nodejs-app/blob/master/package.json" rel="noopener noreferrer nofollow" target="_blank">GitHub repo</a>.
</Admonition>
`

export default function NodeVersionPin() {
  return <MarkdownRenderer markdownContent={markdownContent} />
}
