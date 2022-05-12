import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => (
    <div className='wrapper'>
        <Header />
        {children}
        <Footer />
    </div>
)

export default Layout;
