import dynamic from 'next/dynamic';

const NoSSRComponent = dynamic(() => import('../../src/CirclePackingBorning'), {
  ssr: false,
});

function Page() {
  return <NoSSRComponent />;
}

export default Page;
