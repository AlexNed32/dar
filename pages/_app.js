import Layout from '../components/Layout';
import '../styles/grid.css';
import '../styles/globals.css';

//FontAwsome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default MyApp
