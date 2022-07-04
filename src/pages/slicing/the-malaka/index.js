import React from "react";
import Image from "next/image";
import {
	IconArrowRight,
	IconDownloadWhite,
	LogoCss,
	LogoFirefox,
	LogoHtml,
	LogoNodeJs,
	LogoNpm,
	LogoSublime,
	LogoTerminal,
	LogoYarn,
	TailwindBook,
} from "assets/icon/theMalaka";
import { HeroBg } from "assets/icon/svgComp";

export default function TheMalaka() {
	return (
		<div className="min-h-screen w-full relative">
			<HeroBg className="w-screen min-h-screen object-cover " />
			<div className="h-full w-full max-w-7xl px-4 xl:px-0 mx-auto absolute top-0">
				<div className="flex flex-row z-10 h-full justify-between w-full items-center">
					<div className="flex flex-col space-y-8 max-w-xl">
						<div className="flex flex-col space-y-4">
							<h1 className="text-4xl font-medium text-white">
								Sebuah framework CSS untuk developer yang memiliki phobia
								terhadap CSS
							</h1>
							<p className="text-base text-white/80">
								Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
								diakhiri dengan membangun sebuah website yang responsive dengan
								Tailwind CSS.
							</p>
						</div>
						<div className="flex flex-row justify-between">
							<button className="bg-brand-theMalaka px-5 flex flex-row items-center space-x-2 rounded-3xl h-20 text-base font-bold text-[#F4F7FF] py-2">
								Beli Sekarang
								<div className="relative h-6 w-6">
									<Image
										layout="fill"
										src={IconArrowRight}
										alt="icon arrow right sindev"
									/>
								</div>
							</button>
							<div className="flex flex-row items-center space-x-8">
								<div className="relative h-6 w-6">
									<Image
										layout="fill"
										src={IconDownloadWhite}
										alt="icon download white"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<span className="text-white/60 text-base font-bold">
										SUDAH TERJUAL
									</span>
									<span className="text-white font-semibold text-2xl">
										501,234+
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<span className="text-white/60 text-sm">
								TEKNOLOGI YANG DIGUNAKAN
							</span>
							<div className="flex flex-row space-x-2">
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoCss} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoHtml} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoFirefox} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoNodeJs} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoNpm} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoSublime} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoTerminal} alt="sindev" />
								</div>
								<div className="relative h-6 w-6">
									<Image layout="fill" src={LogoYarn} alt="sindev" />
								</div>
							</div>
						</div>
					</div>
					<div className="relative h-[37.5rem] w-[30rem]">
						<Image
							layout="fill"
							src={TailwindBook}
							alt="tailwind book sindev"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
