import { useNavigate, Link } from "react-router-dom"

const NavMenu = () => {
  let items = [
    { id: 1, link: "/", label: "Home" },
    { id: 2, link: "/about", label: "About" },
  ]

  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export { NavMenu }
