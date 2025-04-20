import OrderNowButton from '@/components/buttons/OrderNowButton';

export default function LeftBanner({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center font-coiny text-secondary md:items-start ${className}`}
    >
      <div className='flex h-full flex-col text-center md:text-right'>
        <h1 className='text-3xl lg:text-6xl'>Custom Software Development</h1>
        <h2 className='text-2xl lg:text-5xl'>
          <span className='text-primary'>{'Built by '}</span>Software Development Experts
        </h2>
        <OrderNowButton className='mt-10 self-center lg:mt-32 lg:w-1/2' />
      </div>
    </div>
  );
}
