import Title from '../components/Title'
import withAuth from '../utils/withAuth'

const Home = () => {
  return (
    <div>
      <Title title="Dashboard" />
    </div>
  )
}

export default withAuth(Home)