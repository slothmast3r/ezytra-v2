import React from 'react'

interface LexicalNode {
  children?: LexicalNode[]
  direction?: string
  format?: number | string
  indent?: number
  type: string
  version: number
  text?: string
  style?: string
  mode?: string
  detail?: number
  [key: string]: any
}

interface RichTextProps {
  content: {
    root: LexicalNode
  }
  className?: string
}

export const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content || !content.root || !content.root.children) return null

  const renderNode = (node: LexicalNode, index: number): React.ReactNode => {
    if (!node) return null

    switch (node.type) {
      case 'root':
        return <div key={index}>{node.children?.map(renderNode)}</div>

      case 'paragraph':
        return (
          <p key={index} className="rich-text-p">
            {node.children?.map(renderNode)}
          </p>
        )

      case 'text':
        let text: React.ReactNode = node.text
        if (node.format & 1) text = <strong key={index}>{text}</strong> // Bold
        if (node.format & 2) text = <em key={index}>{text}</em> // Italic
        if (node.format & 8) text = <code key={index}>{text}</code> // Code
        return text

      case 'link':
        return (
          <a
            key={index}
            href={node.fields?.url}
            target={node.fields?.newTab ? '_blank' : undefined}
            rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
            className="rich-text-link"
          >
            {node.children?.map(renderNode)}
          </a>
        )

      case 'list':
        const ListTag = node.tag === 'ol' ? 'ol' : 'ul'
        return (
          <ListTag key={index} className="rich-text-list">
            {node.children?.map(renderNode)}
          </ListTag>
        )

      case 'listitem':
        return <li key={index}>{node.children?.map(renderNode)}</li>

      case 'heading':
        const HeadingTag = `h${node.tag?.replace('h', '') || '3'}` as keyof JSX.IntrinsicElements
        return (
          <HeadingTag key={index} className={`rich-text-${HeadingTag}`}>
            {node.children?.map(renderNode)}
          </HeadingTag>
        )

      default:
        if (node.children) {
          return <React.Fragment key={index}>{node.children.map(renderNode)}</React.Fragment>
        }
        return null
    }
  }

  return <div className={className}>{content.root.children.map(renderNode)}</div>
}
