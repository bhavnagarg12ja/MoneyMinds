import AppleLogo from "../assets/logos/app_store.svg";
import GoogleLogo from "../assets/logos/google_play.svg";
import StoreLink from "../common/StoreLink";

function StoreLinks() {
  const textLinkClasses =
    "flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800";
  return (
    <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
      <StoreLink
        href="https://www.apple.com/app-store"
        UpperText="Download on the"
        LowerText="App Store"
        logo={AppleLogo}
        className={textLinkClasses}
        target="_blank"
      />
      <StoreLink
        href="https://play.google.com/store"
        UpperText="Download on the"
        LowerText="Play Store"
        logo={GoogleLogo}
        className={textLinkClasses}
        target="_blank"
      />
    </div>
  );
}

export default StoreLinks;
