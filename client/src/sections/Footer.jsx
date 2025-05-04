// const Footer = () => {
//   return (
//     <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
//       <div className="text-white-500 flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>

//       <div className="flex gap-3">
//         <div className="social-icon">
//           <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
//         </div>
//         <div className="social-icon">
//           <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
//         </div>
//         <div className="social-icon">
//           <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
//         </div>
//       </div>

//       <p className="text-white-500">© 2024 Adrian Hajdin. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        {/* Added <a> tags to make these clickable links */}
        <a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a>
        <p>|</p>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </div>

      <div className="flex gap-3">
        {/* Social media icons with links */}
        <a href="https://github.com/Deepak-Kumar-2026" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Adrian Hajdin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
