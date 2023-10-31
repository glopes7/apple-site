export default function navBar() {
  return (
    <div>
      <header className="bg-black h-fit fixed w-full z-10  top-0">
        <nav>
          <ul className="text-[#FFFFFF] opacity-90 flex items-center justify-center text-xs gap-11 h-11">
            <li>
              <a href="apple.com">
                <img src="/assets/logo.svg" />
              </a>
            </li>
            <li>Store</li>
            <li>Mac</li>
            <li>Ipad</li>
            <li>Iphone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Only on Apple</li>
            <li>Accessories</li>
            <li>Support</li>
            <li>
              <a>
                <img src="/assets/search.svg" />
              </a>
            </li>
            <li>
              <a>
                <img src="/assets/bag.svg" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
