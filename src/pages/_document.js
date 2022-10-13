import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Kodchasan&family=Montserrat:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" href="favicon.svg" />
					<meta name="theme-color" content="#4628F1" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
