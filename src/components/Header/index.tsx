import Link from "next/link"

export const Header = () => {
  return (
    <header>
        {/* TODO sacar en un componente aparte */}
        <div>
          <div>
            <div>Usuario</div>
            <Link href='/'>LOGIN</Link>
            <Link href='/'>SIGNUP</Link>
          </div>
          <div>
            <div>Company name</div>
            <div>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>Venue</li>
                  <li>Supplies</li>
                  <li>About</li>
                  <li>Media</li>
                  <li>Contact Us</li>
                </ul>
              </nav>
              <div>(🔎)</div>
            </div>
          </div>
        </div>
        {/* Fin TODO */}
      </header>
  )
}
