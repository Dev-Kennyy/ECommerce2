import LatestLogo from "./LatestLogo";

function LatestNewsDiv() {
  return (
    <div className="flex px-9 justify-center gap-9 flex-wrap-reverse">
      <LatestLogo
        src="Nike_logo_emblem_logotype 1.png"
        date="01 Jan, 2015"
        h2="Fashion Industry"
        p="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <LatestLogo
        src="figma-1-logo 1.png"
        date="01 Jan, 2015"
        h2="Best Design Tool"
        p="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <LatestLogo
        src="kronos-logo-1-1 1.png"
        date="01 Jan, 2015"
        h2="HR Community"
        p="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
    </div>
  );
}

export default LatestNewsDiv;
