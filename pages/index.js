import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>StayFood | Landingpage</title>
      </Head>
      <Header />

      {/* Main Content Start */}
      <main className="container">
        {/* Section Main Menu Start */}
        <section>
          <div className="flex items-center justify-between gap-x-5">
            <div className="w-6/12">
              <p className="text-sm font-light text-primary uppercase mb-0">
                GET 30% FREE IN FIRST ORDER
              </p>
              <h1 className="text-[48px] leading-[52px] xxl:text-[56px] xxl:leading-[60px] font-bold text-primary capitalize my-6">
                Try Our Food & Enjoy With Family Anytime
              </h1>
              <p className="text-sm font-light text-primary max-w-sm mb-0">
                Just confirm your order and enjoy our traditional food, make a
                great day with delicious and healthy food
              </p>
              <div className="flex items-center gap-x-6 mt-[48px] xxl:mt-[70px]">
                <Button extraclass="btn-order-now text-base font-bold text-white bg-lemonade-500">
                  Order Now
                </Button>
                <h5 className="text-2xl font-medium mb-0">
                  <span className="text-xs font-light block mb-1">ONLY</span>
                  $3.57
                </h5>
              </div>
            </div>

            <div className="w-6/12">
              <div className="wp-image-hero h-full w-full">
                <img src="/images/contents/menu-hero.png" alt="Main Menu" />
              </div>
            </div>
          </div>
        </section>
        {/* Section Main Menu End */}

        {/* Section Footer Menu Start */}
        <section className="my-[50px] xxl:my-[80px] px-[30px]">
          <div className="grid grid-rows-1 grid-cols-3 items-center gap-x-14 xxl:gap-x-9">
            {/* Sub Menu 1 Start */}
            <div className="shadow-card-menu w-full min-h-full max-w-xs flex rounded-[20px] py-[18px] relative">
              <img
                src="/images/contents/menu-1.png"
                alt="Rendang"
                className="image-submenu absolute bottom-[30px] -left-[30px]"
              />
              <div className="w-5/12"></div>
              <div className="w-4/12 flex flex-col">
                <h5 className="text-base font-medium text-primary mb-2">
                  Rendang
                </h5>
                <p className="text-sm font-light text-primary mb-[18px]">
                  $3.57
                </p>
                <Link
                  href="/"
                  className="btn-order-submenu text-sm font-medium text-lemonade-500 mt-auto"
                >
                  Order Now
                </Link>
              </div>
              <div className="w-auto"></div>
              <button className="icon-cart absolute -bottom-[20px] -right-[20px]">
                <img
                  src="/images/icons/icon-cart.svg"
                  alt="Cart"
                  className="w-full h-full object-cover object-center"
                />
              </button>
            </div>
            {/* Sub Menu 1 End */}

            {/* Sub Menu 2 Start */}
            <div className="shadow-card-menu w-full min-h-full max-w-xs flex rounded-[20px] py-[18px] relative">
              <img
                src="/images/contents/menu-2.png"
                alt="Sate"
                className="image-submenu absolute bottom-[30px] -left-[30px]"
              />
              <div className="w-5/12"></div>
              <div className="w-4/12 flex flex-col">
                <h5 className="text-base font-medium text-primary mb-2">
                  Sate
                </h5>
                <p className="text-sm font-light text-primary mb-[18px]">
                  $3.57
                </p>
                <Link
                  href="/"
                  className="btn-order-submenu text-sm font-medium text-lemonade-500 mt-auto"
                >
                  Order Now
                </Link>
              </div>
              <div className="w-auto"></div>
              <button className="icon-cart absolute -bottom-[20px] -right-[20px]">
                <img
                  src="/images/icons/icon-cart.svg"
                  alt="Cart"
                  className="w-full h-full object-cover object-center"
                />
              </button>
            </div>
            {/* Sub Menu 2 End */}

            {/* Sub Menu 3 Start */}
            <div className="shadow-card-menu w-full min-h-full max-w-xs flex rounded-[20px] py-[18px] relative">
              <img
                src="/images/contents/menu-3.png"
                alt="Nasi Uduk"
                className="image-submenu absolute bottom-[30px] -left-[30px]"
              />
              <div className="w-5/12"></div>
              <div className="w-4/12 flex flex-col">
                <h5 className="text-base font-medium text-primary mb-2">
                  Nasi Uduk
                </h5>
                <p className="text-sm font-light text-primary mb-[18px]">
                  $3.57
                </p>
                <Link
                  href="/"
                  className="btn-order-submenu text-sm font-medium text-lemonade-500 mt-auto"
                >
                  Order Now
                </Link>
              </div>
              <div className="w-auto"></div>
              <button className="icon-cart absolute -bottom-[20px] -right-[20px]">
                <img
                  src="/images/icons/icon-cart.svg"
                  alt="Cart"
                  className="w-full h-full object-cover object-center"
                />
              </button>
            </div>
            {/* Sub Menu 3 End */}
          </div>
        </section>
        {/* Section Footer Menu End */}

        {/* List Social Media Start */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[50px] flex flex-col gap-y-[30px]">
          <div className="wp-icon-sosmed">
            <a href="#">
              <img src="/images/icons/icon-ig.svg" alt="Instagram" className="h-[50px] w-[50px]" />
            </a>
          </div>

          <div className="wp-icon-sosmed">
            <a href="#">
              <img src="/images/icons/icon-fb.svg" alt="Facebook" className="h-[50px] w-[50px]" />
            </a>
          </div>

          <div className="wp-icon-sosmed">
            <a href="#">
              <img src="/images/icons/icon-tw.svg" alt="Twitter" className="h-[50px] w-[50px]" />
            </a>
          </div>
        </div>
        {/* List Social Media End */}
      </main>
      {/* Main Content End */}
    </>
  );
}
