import Link from "next/link";
import Container from "@/components/ui/container";

const AboutPage = () => {
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8 h-full '>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold'>About StyleHub</h1>
            <Link
              href='/'
              className='text-sm font-bold text-black hover:text-gray-700'
            >
              Back Home
            </Link>
          </div>
          <p className='mb-4'>
            StyleHub is your one-stop destination for the latest fashion trends.
            We curate a diverse collection of clothing items to cater to every
            style and occasion.
          </p>
          <p className='mb-4'>
            Our mission is to make fashion accessible and enjoyable for
            everyone. We believe that clothing is a form of self-expression, and
            we're here to help you find pieces that reflect your unique
            personality.
          </p>
          <p className='mb-4'>
            At StyleHub, we prioritize quality, affordability, and customer
            satisfaction. Our team works tirelessly to bring you the best
            shopping experience possible.
          </p>
          <Link href='/' className='text-black font-bold hover:underline'>
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
