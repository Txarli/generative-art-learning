import dynamic from 'next/dynamic';

const NoSSRComponent = dynamic(() => import('../../src/CirclePacking'), {
  ssr: false,
});

function Page() {
  return <NoSSRComponent />;
}

export default Page;
