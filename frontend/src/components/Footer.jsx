

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img
            className="mb-5 w-40"
            src="/wecare_logo.svg"
            alt="WeCare Logo"
            width="150"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            WeCare is more than a booking platform  its your partner in
            health. We connect patients with compassionate, qualified healthcare
            professionals across the country. From timely appointments to
            trustworthy advice, WeCare makes care simple, smart, and seamless..
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>wecare@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ Wecare.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
