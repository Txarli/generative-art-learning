import dynamic from 'next/dynamic';

const NoSSRComponent = dynamic(() => import('../../src/UnDeuxTrois'), {
  ssr: false,
});

function Page() {
  return (
    <>
      <small>Based in Vera Molnár's work</small>
      <NoSSRComponent />
    </>
  );
}

export default Page;
