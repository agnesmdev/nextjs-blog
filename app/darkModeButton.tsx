import Night from "../public/icons/night.png";
import Light from "../public/icons/light.png";
import Image from "next/image";

type DarkModeButtonProps = {
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void
}

export default function DarkModeButton(props: DarkModeButtonProps) {
  const {darkMode, setDarkMode} = props;

  const updateDarkMode = () => {
    setDarkMode(!darkMode);
  }

	const LightButton = <Image className="w-10 h-10" src={Night} alt="dark mode" />
	const DarkButton = <Image className="w-10 h-10" src={Light} alt="light mode" />

  return <a onClick={updateDarkMode} className="fixed top-5 right-8 cursor-pointer flex justify-self-center justify-center items-center rounded-full w-18 h-18 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-600/50 lg:hidden">
		{darkMode ? DarkButton : LightButton}
	</a>;
}