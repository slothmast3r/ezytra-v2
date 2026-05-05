import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="cs-block__heading" {...props} />,
    h2: (props) => <h2 className="cs-block__heading" {...props} />,
    h3: (props) => <h3 className="cs-block__heading" {...props} />,
    p: (props) => <p className="cs-prose__p" {...props} />,
    ul: (props) => <ul className="cs-prose__ul" {...props} />,
    ol: (props) => <ol className="cs-prose__ol" {...props} />,
    a: (props) => <a className="cs-prose__a" {...props} />,
    ...components,
  }
}
