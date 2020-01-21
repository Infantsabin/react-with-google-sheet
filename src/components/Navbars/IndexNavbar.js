import React from 'react'
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from 'reactstrap'

function IndexNavbar () {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('')
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent')
      }
    }
    window.addEventListener('scroll', updateNavbarColor)
    return function cleanup () {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} expand='lg' color='info'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              href='https://github.com/Infantsabin/react-with-google-sheet'
              target='_blank'
              id='navbar-brand'
            >
              Neo
            </NavbarBrand>
            <UncontrolledTooltip target='#navbar-brand'>
              Designed by Neo. Coded by Infant Sabin
            </UncontrolledTooltip>
            <button
              className='navbar-toggler navbar-toggler'
              onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setCollapseOpen(!collapseOpen)
              }}
              aria-expanded={collapseOpen}
              type='button'
            >
              <span className='navbar-toggler-bar top-bar' />
              <span className='navbar-toggler-bar middle-bar' />
              <span className='navbar-toggler-bar bottom-bar' />
            </button>
          </div>
          <Collapse
            className='justify-content-end'
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href='https://in.linkedin.com/in/infant-sabin-a-788749149'
                  target='_blank'
                  id='linkedin-tooltip'
                >
                  <i className='fab fa-linkedin' />
                  <p className='d-lg-none d-xl-none'>LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target='#linkedin-tooltip'>
                  Follow me on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.facebook.com/infant.sabinson.5'
                  target='_blank'
                  id='facebook-tooltip'
                >
                  <i className='fab fa-facebook-square' />
                  <p className='d-lg-none d-xl-none'>Facebook</p>
                </NavLink>
                <UncontrolledTooltip target='#facebook-tooltip'>
                  Like me on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.instagram.com/infantsabin/'
                  target='_blank'
                  id='instagram-tooltip'
                >
                  <i className='fab fa-instagram' />
                  <p className='d-lg-none d-xl-none'>Instagram</p>
                </NavLink>
                <UncontrolledTooltip target='#instagram-tooltip'>
                  Follow me on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default IndexNavbar
