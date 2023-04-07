import {
	GlassEmail,
	GlassGithub,
	GlassInstragram,
	GlassLinkedIn,
} from "assets/icon/home";
import { CompSocmed } from "components/molecules";
import { Ahref } from "config";
import React from "react";

export const ContactHome = () => {
	return (
		<section
			id="contact"
			className="relative w-full hidden lg:flex lg:justify-center bg-gradient-to-b from-transparent to-[#171045]"
		>
			<div className="pt-20 pb-40 space-y-2 sm:space-y-8">
				<h2 className="text-2xl font-bold text-center md:text-4xl text-brand">
					Contacts
				</h2>
				<div className="flex flex-row px-16 py-6 space-x-10 bg-gradient-to-tr from-brand to-transparent rounded-xl">
					<CompSocmed
						src={GlassInstragram}
						href={Ahref.instragramLink}
						name="Instragram"
					/>
					<CompSocmed src={GlassEmail} href={Ahref.emailLink} name="Email" />
					<CompSocmed
						src={GlassLinkedIn}
						href={Ahref.linkedInLink}
						name="LinkedIn"
					/>
					<CompSocmed src={GlassGithub} href={Ahref.githubLink} name="Github" />
				</div>
			</div>
		</section>
	);
};
