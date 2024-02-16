import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				{/*<!-- Compiled and minified CSS -->*/}
    		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
			</Head>
      <body>
        <Main />
        <NextScript />
      </body>
		{/*<!-- Compiled and minified JavaScript -->*/}
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </Html>
  )
}
