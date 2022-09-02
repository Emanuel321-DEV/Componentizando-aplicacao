import {ButtonProps} from '../components/interface'


export function SideBar({children}: ButtonProps) {

return (
  
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {children}
    </div>

  </nav>

)


}