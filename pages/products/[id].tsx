import { useRouter } from 'next/router'

import Layout from '@/components/Layout';

const Post = () => {
  const router = useRouter();
  const { id } = router.query

  return (
      <Layout titlePage={`Detalhes do produto ${id}`}> 
        <p>Post: {id}</p>  
      </Layout>
    )
}

export default Post