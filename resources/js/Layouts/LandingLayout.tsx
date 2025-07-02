import Navbar from '@/Components/Partials/Navbar';
import { LayoutProps } from '@/types';
import { Head } from '@inertiajs/react';


type Props = {}

const LandingLayout: React.FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head title={title}></Head>
      <Navbar></Navbar>
      <div>
        <main className='mt-16'>
          {children}
        </main>
      </div>
    </>
  )
}

export default LandingLayout;