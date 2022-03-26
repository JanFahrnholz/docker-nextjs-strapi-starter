module.exports = {
	content: ["./components/**/*.*", "./pages/**/*.*", "./public/**/*.*"], //add this line
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				red: {
					900: "#B80712",
					800: "#76040C",
				},
				gray: {
					900: "#1E1E1E",
					800: "#252525",
					700: "#333333",
				},
				plat: "#9E9E9E",
				white: "#FFFFFF",
				black: "#000000",
				dark: "#0C111D",
				success: {
					900: "#3ECC2F",
					800: "#38B72A",
				},
				warning: "#f1c40f",
				danger: "#e74c3c",
			},
		},
	},
	plugins: [],
};
