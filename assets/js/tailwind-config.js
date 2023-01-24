tailwind.config = {
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto Slab', 'serif'],
				'inter': ['Inter', 'sans-serif']
			},
			backgroundImage: {
				'welcome-gradient': 'linear-gradient(0deg, rgba(23,25,29, 0.77) 0%, rgba(23, 25, 29, 0) 100%)',
				'welcome': "url('./assets/img/background.png')",
				'search-gradient': 'linear-gradient(180deg, #E3FAFF 0%, #E2FFF8 100%)',
				'white-gradient': 'linear-gradient(-90deg, #FFFFFF 5.83%, rgba(255, 255, 255, 0) 100%)',
				'white-bottom-gradient': 'linear-gradient(360deg, #FFFFFF 5.83%, rgba(255, 255, 255, 0) 100%)',
				'fast-login': "url('./assets/img/fast-login-bg.png')",
				'login': "url('./assets/img/login.png')",
				'login1': "url('./assets/img/login1.png')",
				'registration': "url('./assets/img/registration.png')",
				'restore': "url('./assets/img/restore.png')",
				'onboarding': "url('./assets/img/onboarding.png')",
				'recept': "url('./assets/img/recept.png')",
				'share': "url('./assets/img/share.png')",
				'manual': "url('./assets/img/manual.png')",
			},
			backgroundSize: {
				'100%': '100%',
				'h-100%': 'auto 100%',
			},
			colors: {
				'button-border': 'rgba(0, 0, 0, 0.04)',
				'button-background': 'rgba(118, 118, 128, 0.12)',
				'yellow-difficult': '#FFB945',
				'gray-difficult': '#E2E2E2',
				'gray-difficult-hover': '#B3B4BA',
				'green-difficult': '#6FCF97',
				'blue-difficult': '#85CAE4',
				'orange-difficult': '#F87E35',
				'orange-difficult-hover': '#FFB945',
				'gray-border': '#D9D9D9',
				'gray-font': '#636773',
				'dark-bg': '#17191D66',
				'light-dark-bg': '#17191D20',
				'dark-color': '#17191D',
				'forgot-color': '#B3B4BA',
				'number-bg': '#F5F5F5',
			},
			boxShadow: {
				'button-shadow': '0px 3px 8px rgba(0, 0, 0, 0.12)'
			}
		}
	}
}