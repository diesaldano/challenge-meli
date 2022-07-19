import NavBar from './NavBar';
import styles from './Layout.module.css';

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-gray-100">
            <NavBar />
            <main style={{ padding: '0rem 10rem' }}>
                {children}
            </main>
        </div>
    )
}

export default Layout