import OrderNowButton from '@/components/buttons/OrderNowButton';

export default function LeftBanner({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center font-coiny text-secondary md:items-start ${className}`}
    >
      <div className='flex h-full flex-col text-center md:text-right'>
        <div className='text-3xl lg:text-6xl'>Custom Software</div>
        <div className='text-2xl lg:text-5xl'>
          <span className='text-primary'>{'Built by '}</span>Industry Experts
        </div>
        <OrderNowButton className='mt-10 self-center lg:mt-32 lg:w-1/2' />
      </div>
    </div>
  );
}
