import dynamic from 'next/dynamic';

const NoSSRComponent = dynamic(() => import('../../src/CubicDisarray'), {
  ssr: false,
});

function Page() {
  return (
    <>
      <small>Based in Georg Nees's work</small>
      <NoSSRComponent />
    </>
  );
}

export default Page;
