import type { NextPage } from 'next';
import BookingForm from '@/components/flights/BookingForm'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold">送機行程</h1>
      <BookingForm />
    </>
  );
};

export default Home;