import Link from 'next/link'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <nav>
      <StyledList>
        <li>
          <Link href="/">Both</Link>
        </li>
        <li>
          <Link href="/ssr">Server-Side Rendering</Link>
        </li>
        <li>
          <Link href="/csr">Client-Side Rendering</Link>
        </li>
      </StyledList>
    </nav>
  )
}

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;
  a {
    text-decoration: underline;
  }
  li {
    list-style: none;
  }
`

export default Nav
