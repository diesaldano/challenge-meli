import NavBar from './NavBar';
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-100">
        <NavBar />
        <main className='padding'>
          {children}
        </main>
    </div>
  )
}

export default Layout